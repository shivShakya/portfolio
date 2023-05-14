var scene = new THREE.Scene();
var clock = new THREE.Clock();
var textureLoader = new THREE.TextureLoader();
var loader = new THREE.GLTFLoader();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

//camera look At
let spacePressed = false;
let lookAtPositionIndex = 0;
const lookAtPositions = [
  new THREE.Vector3(0,0,0),    // Default position
  new THREE.Vector3(2,3,-16),   // for craftbox
  new THREE.Vector3(10,3,-22),  // for mess
  new THREE.Vector3(17,12,8),   // for pylab
  new THREE.Vector3(0,10,0),     // for robot
  new THREE.Vector3(-12,9,17),    // for room
  // Up position                   // for certificates 
];

const lookAtPositionNames = [
  'Default position',
  'Craftbox position',
  'Mess position',
  'Pylab position',
  'Robot position',
  'Room position',
  // Up position                   // for certificates 
];

document.addEventListener('keydown', function(event) {
  if (event.key === ' ') { // Check for Space key
    spacePressed = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === ' ') { // Check for Space key
    spacePressed = false;
      lookAtPositionIndex = (lookAtPositionIndex + 1) % lookAtPositions.length;
      const newPosition = lookAtPositions[lookAtPositionIndex];
      const newPositionName = lookAtPositionNames[lookAtPositionIndex];
      window.alert(newPositionName);
      camera.lookAt(newPosition);
  }
});
// camera look at change projects 


const modeToggl = document.getElementById('mode-toggle');
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.updateProjectionMatrix();
camera.updateMatrixWorld();
// Create a renderer and add it to the DOM
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
var currentColor = 0xffffff;
renderer.setClearColor(currentColor);
renderer.antialias = true;  


//lights
const l1 = new THREE.DirectionalLight(0xffffff, 0.3);
const l2 = new THREE.AmbientLight(0xffffff, 0.5);
const l3 = new THREE.PointLight(0xffffff, 0.3);

modeToggl.addEventListener('click', function() {
      if (currentColor === 0xffffff) {     
              currentColor = 0x000000;
              // Light when dark
             l1.position.set(0, 5, 0.2);
             l2.position.set(0, 5, 0.2);
             l3.position.set(0, 5,0.2);        

     } else {
             currentColor = 0xffffff;
             //Light when bright
             l1.position.set(10, 30, 10);
             l2.position.set(10, 30, 10);
             l3.position.set(10,30,10);
     }
        renderer.setClearColor(currentColor);
});
scene.add(l1,l2,l3);

// function for adding model into scene
function modelCall( mod, pX, pY, pZ, fac , scaleFac , rX, rY ,rZ){
  let model;
  loader.load(
    mod,
    function (gltf) {
        model = gltf.scene;
        model.position.set(pX, pY, pZ); // Change the position of the model
        var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / scaleFac;
        model.scale.set(scaleFactor/fac, scaleFactor/fac, scaleFactor/fac);
        model.rotation.set(rX,rY,rZ);
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        var animations = gltf.animations;
        if (animations && animations.length) {
            for (var i = 0; i < animations.length; i++) {
                  mixer.clipAction(animations[i]).play();
            }
        }
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
return model;   
}


//function for plane Mesh
function addPlaneMess(image ,pX , pY , pZ , size){
  const iconTexture = textureLoader.load(image);
  const iconMaterial = new THREE.MeshBasicMaterial({
        map: iconTexture,
        transparent: true,
        side: THREE.DoubleSide
      });
  const planeGeometry = new THREE.PlaneGeometry(size, size);
  const planeMesh = new THREE.Mesh(planeGeometry, iconMaterial);
  planeMesh.position.set(pX,pY,pZ);
  return planeMesh;
}


//boxes for identifying projects
function createBoxes(x , y , z , o , w ,scX,scY,scZ,pX,pY,pZ){
  const Geometry = new THREE.BoxGeometry(x,y,z);
  const Material = new THREE.MeshBasicMaterial({color:'#ffffff', transparent: w, wireframe: w,opacity: o});
  const box = new THREE.Mesh(Geometry,Material);
  box.scale.set(scX,scY,scZ);
  box.position.set(pX,pY,pZ);
  return box;
}


// function for the camera to do circle movement
function moveAround( radius , angle, yPoint ,building){
  let x = radius * Math.sin(angle) + building.position.x;
  let z = radius * Math.cos(angle) + building.position.z;
  camera.position.set(x,yPoint,z);    
}


//controls
function OrbControl(enableRotate,enableZoom,enablePan,rotateSpeed,maxPolarAngle){
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableRotate = enableRotate;
  controls.enableZoom = enableZoom;
  controls.enablePan = enablePan;
  controls.rotateSpeed = rotateSpeed;
  controls.maxPolarAngle = maxPolarAngle;
  return controls; 
}

// Define the 5 camera positions
const positions = [
  new THREE.Vector3(0,20,-40),
  new THREE.Vector3(5, 2, 10),
  new THREE.Vector3(10, 5, -22),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(15, 10, -5),
  new THREE.Vector3(-5, 7, 15),
];

let currentPositionIndex = 0;
camera.position.copy(positions[currentPositionIndex]);
// Create button and add event listener
const button = document.getElementById('change-script-btn');
button.addEventListener('click', () => {
  // Toggle to the next camera position in the array
  currentPositionIndex = (currentPositionIndex + 1) % positions.length;
  camera.position.copy(positions[currentPositionIndex]);
});

//buttons for every project
var craftBtn = document.getElementById("craftstore");
var messBtn = document.getElementById("mess");
var labBtn = document.getElementById("lab");
var roboBtn = document.getElementById("robo");
var roomBtn = document.getElementById("room");
var certBtn = document.getElementById("cert");
let projectBtn = [craftBtn,messBtn,labBtn,roboBtn,roomBtn,certBtn];


//Raycasting
function onMouseClick(event ,projectBox, projectPlane , btn) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const intersect = raycaster.intersectObject(projectBox);
  if (intersect.length > 0) {
    projectPlane.visible = !projectPlane.visible;
    
    for(let i = 0 ; i < projectBtn.length ; i++){
          if (btn === projectBtn[i]){
                 projectBtn[i].style.display = 'Block';
          }else{
               projectBtn[i].style.display = 'none';
          }
    }

  }
}

       ///////////////       After making functions , the code is reduced to 7-8 lines       //////////////////

// models
modelCall('material/city.glb',0,0,0,1,500,0,0,0);
modelCall('material/mess.glb',15,-5,-19,50,50,0,-0.5,0);
modelCall('material/lab.glb',17,11,8,16,50,0,-0.5,0);
let x = 0;
let y = 10;
let z = 0;
modelCall('material/cuteRobo.glb',x,y,z,10,50,0,0,0);
let xR = -12;
let yR = 8;
let zR = 17;
modelCall('material/room.glb',xR,yR,zR,5000,50,0,0,0);



//tags for the projects
let craftPlane =  addPlaneMess('material/craftStore.png',6,6,-12,5);
craftPlane.rotation.y = 0.5;
let messPlane = addPlaneMess('material/aamchi.png',7,5,-22,5);
let labPlane = addPlaneMess('material/face.png',15,17,5,5);
labPlane.rotation.y = -1.5;
let roboPlane = addPlaneMess('material/robo.png',x,y+10,z,5);
let roomPlane = addPlaneMess('material/room.png',xR,yR+9,zR,5);
let certPlane = addPlaneMess('material/cert.png',xR+0.5,yR+1,zR-0.3,0.5);
certPlane.rotation.y = -0.5;

//logo aamchi mess
let aamchiPlane = addPlaneMess('material/aamchi_mess.png',10.2,3.5,-23,1.4);
aamchiPlane.rotation.y -= 0.5;
let plane = [craftPlane,messPlane,labPlane,roboPlane, roomPlane , certPlane, aamchiPlane];
scene.add(...plane);

//boxes
const messBox = createBoxes(3,2,1,0,true,3,3,3,10,3,-22);
messBox.rotation.y = -0.5;
const craftBox = createBoxes(7,7,7,0,true,1,1,0.8,2,3,-16);
const labBox = createBoxes(10,5,10,0,true,1,0.5,1,17,12,8);
labBox.rotation.y = -0.5;
const roboBox = createBoxes(2,2,2,0,true,2,5,2,x,y,z);
const roomBox = createBoxes(4,4,4,0,true,1,1,1,xR,yR+3,zR);
const certBox = createBoxes(1.5,3,0.5,0,true,0.5,0.5,0.5,xR+0.6,yR+1,zR-0.9);
let boxes = [craftBox ,messBox , labBox , roboBox, roomBox, certBox];
scene.add(...boxes);

//call the function on raycasting
for(let i = 0 ; i < boxes.length ; i++){
     window.addEventListener('click', function(event){onMouseClick(event,boxes[i],plane[i],projectBtn[i])});
}

//controls
let controls = OrbControl(true,true,true,0.5,Math.PI);



// animation function
let angle = 0;
var render = function () {
    requestAnimationFrame( render );
    controls.update();
    // choosing project
    document.addEventListener('keydown', function(event){
      angle += 0.0001;
      if (event.code ==='KeyM'){
                camera.lookAt(messBox.position);
                moveAround(6,angle,5,messBox);
      }else if(event.code === 'KeyC'){
                camera.lookAt(craftBox.position);
                moveAround(12,angle,5,craftBox);
      }else if(event.code === 'KeyL'){
               camera.lookAt(labBox.position);
               moveAround(15,angle,17,labBox);
      }else if(event.code === 'KeyR'){
                camera.lookAt(roboBox.position);
                moveAround(10,angle,10,roboBox);
      }else if(event.code === 'KeyB'){
              camera.lookAt(roomBox.position);
               moveAround(0.2,angle,9,roomBox);
      }
    });

    camera.lookAt(lookAtPositions[lookAtPositionIndex]);
    //camera.lookAt(craftBox.position);
    renderer.render( scene, camera );
  };
  
render();
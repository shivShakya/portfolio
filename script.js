var scene = new THREE.Scene();
var clock = new THREE.Clock();
var loader = new THREE.GLTFLoader();

const modeToggl = document.getElementById('mode-toggle');
const cameraPos = document.getElementById('change-script-btn');
// Create a camera and position it
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,-9);
		// Create a renderer and add it to the DOM
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas")});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
var currentColor = 0xffffff;
renderer.setClearColor(currentColor);
renderer.antialias = true;





//toggling dark/light
modeToggl.addEventListener('click', function() {
      if (currentColor === 0xffffff) { 
              currentColor = 0x000000;
     } else {
             currentColor = 0xffffff; 
     }
        renderer.setClearColor(currentColor);
});

//toggling scenes
var x = 0;
var y = 0;
cameraPos.addEventListener('click',function(){
    if (x === 0 && y === -9){
          x = 22;
          y = 0;
          camera.rotation.y = 0.5;
    }else{
      x = 0;
      y = -9;
    }
    camera.position.set(x,0,y);

})  


const geometry = new THREE.BoxGeometry( 20, 0.2, 3 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x333333} ); 
const road = new THREE.Mesh( geometry, material ); 
road.position.set(0,-3.4,-2);
scene.add( road );

var mixer;

var model3 = loader.load(
  'shivamRun.glb',
  function (gltf) {
      var model = gltf.scene;
      model.position.set(-2, -3.3, -2); // Change the position of the model
      var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 500;
      var fac = 2;
      model.scale.set(scaleFactor/fac, scaleFactor/fac, scaleFactor/fac);
      model.rotation.x = 1.5;
      
      mixer = new THREE.AnimationMixer(model);
      var animations = gltf.animations;
      if (animations && animations.length) {
          for (var i = 0; i < animations.length; i++) {
                mixer.clipAction(animations[i]).play();
          }
      }
      scene.add(model);
  },
  undefined,
  function (error) {
      console.error(error);
  }
);

var crock;
var model2 = loader.load(
  'crock.glb',
  function (gltf) {
      crock = gltf.scene;
      crock.position.set(-2, -2.75, -2); // Change the position of the model
      var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 500;
      var fac = 1;
      crock.scale.set(scaleFactor/fac, scaleFactor/fac, scaleFactor/fac);
      scene.add(crock);
  },
  undefined,
  function (error) {
      console.error(error);
  }
);


var model1 = loader.load(
  'street_light.glb',
  function (gltf) {
      var model = gltf.scene;
      model.position.set(0, -3.5, 0);
      model.scale.set(0.02, 0.02, 0.02);
     var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 500;
      model.scale.set(scaleFactor/80, scaleFactor/80, scaleFactor/80);
      scene.add(model);
  },
  undefined,
  function (error) {
      console.error(error);
  }
);




  var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  var directionalLightPositions = [      { x: 0, y: -4, z: 0 },      { x: 0, y: 4, z: 0 },      { x: 0, y: -4, z: -2 },      { x: 0, y: 4, z: 2 }    ];
  for (var i = 0; i < directionalLightPositions.length; i++) {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(
      directionalLightPositions[i].x,
      directionalLightPositions[i].y,
      directionalLightPositions[i].z
    );
    scene.add(directionalLight);
  }

  // script 2

const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00});
const geo = new THREE.BoxGeometry(1,1,1);
const cube  = new THREE.Mesh(geo, mat);
scene.add(cube);
cube.position.x = 20;


const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableRotate = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.rotateSpeed = 0.5;
controls.maxPolarAngle = Math.PI / 2; 
function animate() {
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
      //if (mixer) mixer.update(clock.getDelta());

       // Rotate joints
      crock.position.x += 0.02;
      if (crock.position.x > 5){
          crock.position.x = -5;
      }
      controls.update(); 

}
animate();
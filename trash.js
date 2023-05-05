/*
var model;
var model3 = loader.load(
        'material/city.glb',
        function (gltf) {
            model = gltf.scene;
            model.position.set(0, 0, 0); // Change the position of the model
            var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 500;
            var fac = 1;
            model.scale.set(scaleFactor/fac, scaleFactor/fac, scaleFactor/fac);
            
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
*/

// mess model 
/*
let mess;
var model3 = loader.load(
              'material/mess.glb',
              function (gltf) {
                  mess = gltf.scene;
                  mess.position.set(15,-5,-19);
                  var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 50;
                  var fac = 50;
                  mess.scale.set(scaleFactor/fac, scaleFactor/fac, scaleFactor/fac);
                  mess.rotation.y = -0.5;
                  mixer = new THREE.AnimationMixer(mess);
                  var animations = gltf.animations;
                  if (animations && animations.length) {
                      for (var i = 0; i < animations.length; i++) {
                            mixer.clipAction(animations[i]).play();
                        
                      }
                  }
                  scene.add(mess);
              },
              undefined,
              function (error) {
                  console.error(error);
    }
);
*/      

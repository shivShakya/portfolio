
// function for adding model into scene
function modelCall( mod, pX, pY, pZ, fac , scaleFac ){
    var model;
    loader.load(
      mod,
      function (gltf) {
          model = gltf.scene;
          model.position.set(pX, pY, pZ); // Change the position of the model
          var scaleFactor = Math.min(window.innerWidth, window.innerHeight) / scaleFac;
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
  return model;   
  }

export default modelCall;
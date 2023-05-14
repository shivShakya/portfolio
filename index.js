function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var btnTog = document.querySelector(".btn-tog");
    anime({
      targets: sidebar,
      width: sidebar.offsetWidth == 0 ? 250 : 0,
      easing: "easeInOutQuad",
      duration: 50
    });
    anime({
      targets: btnTog,
      width: btnTog.offsetWidth == 25 ? 234 : 25,
      easing: "easeInOutQuad",
      duration: 200
    });
  }

  //toogle tab
  const craftToggle = document.getElementById('craftstore');
  const messToggle = document.getElementById('mess');
  const labToggle = document.getElementById('lab');
  const roboToggle = document.getElementById('robo');
  const roomToggle = document.getElementById('room');
  const certToggle = document.getElementById('cert');
  //articles
  const craft_Box = document.querySelector('.craft-box');
  const mess_Box = document.querySelector('.mess-box');
  const robo_Box = document.querySelector('.robo-box');
  const lab_Box = document.querySelector('.lab-box');
  const room_Box = document.querySelector('.room-box');
  const cert_Box = document.querySelector('.cert-box');



  const resumeLi = document.querySelector('.clickable-div');
  const resume = document.querySelector('.resume');
  resume.style.display = 'none';

  resumeLi.addEventListener('click', function() {
    if (resume.style.display === 'none') {
      resume.style.display = 'block';
    } else {
      resume.style.display = 'none';
    }
  });



  const aboutMeItem = document.querySelector('.about');

  aboutMeItem.addEventListener('click', function() {
        room_Box.classList.toggle('chat-1');
    });

  
  const projectMenu = document.querySelector('.project');
  const project = document.querySelector('.option-menu');
  projectMenu.addEventListener('click', function(){
         if (project.style.display === 'none'){
                project.style.display = 'block';
         } else {
            project.style.display = 'none';
         }
  })


  const certificate = document.querySelector('.certificate');

  certificate.addEventListener('click', function(){
           cert_Box.classList.toggle('chat-1');
  })




  //functionality of toggling
  craftToggle.addEventListener('click', function() {
            craft_Box.classList.toggle('chat-1');
   });
  messToggle.addEventListener('click', function(){
          mess_Box.classList.toggle('chat-1');
   });
   labToggle.addEventListener('click', function(){
            lab_Box.classList.toggle('chat-1');
   });
   roboToggle.addEventListener('click', function(){
    robo_Box.classList.toggle('chat-1');
   });
   roomToggle.addEventListener('click', function(){
    room_Box.classList.toggle('chat-1');
   });
   certToggle.addEventListener('click', function(){
          cert_Box.classList.toggle('chat-1');
    });
 
 // sidebar toggle
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
          document.querySelector('.sidebar').classList.toggle('side-dark');
          document.querySelector('.btn-tog').classList.toggle('btn-tog-t');
  });

  


const c_op = document.querySelector('.c-op');
const a_op = document.querySelector('.a-op');
const f_op = document.querySelector('.f-op');
const r_op = document.querySelector('.r-op');

c_op.addEventListener('click', function(){
       console.log("hi");
        craft_Box.classList.toggle('chat-1');
});
a_op.addEventListener('click', function(){
        mess_Box.classList.toggle('chat-1');
});
f_op.addEventListener('click', function(){
        lab_Box.classList.toggle('chat-1');
});
r_op.addEventListener('click', function(){
       robo_Box.classList.toggle('chat-1');
 });





  /*
  const toggleButton = document.getElementById('change-script-btn');
  const scriptTag = document.getElementById('myScript');

  toggleButton.addEventListener('click', () => {
    if (scriptTag.src.includes('script.js')) {
      scriptTag.src = 'script1.js';
    } else {
      scriptTag.src = 'script.js';
    }
  });
  */



//
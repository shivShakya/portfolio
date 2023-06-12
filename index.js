                                            /*    All the best   */
                                 /*        Connection with html DOM    */
  
  //toogle tab
  const craftToggle = document.getElementById('craftstore');
  const messToggle = document.getElementById('mess');
  const labToggle = document.getElementById('lab');
  const roboToggle = document.getElementById('robo');
  const roomToggle = document.getElementById('room');
  const certToggle = document.getElementById('cert');
  const resumeToggle = document.querySelector('.resume-but');
  const aboutMeItem = document.querySelector('.about');
  const certificate = document.querySelector('.certificate');
  const contact = document.querySelector('.contact-but');
  //articles
  const craft_Box = document.querySelector('.craft-box');
  const mess_Box = document.querySelector('.mess-box');
  const robo_Box = document.querySelector('.robo-box');
  const lab_Box = document.querySelector('.lab-box');
  const room_Box = document.querySelector('.room-box');
  const cert_Box = document.querySelector('.cert-box');
  const other_box = document.querySelector('.other-box');
  const contBox = document.querySelector('.contact-box');
  const resume = document.querySelector('.resume-div');
// project tab
  const c_op = document.querySelector('.c-op');
  const a_op = document.querySelector('.a-op');
  const f_op = document.querySelector('.f-op');
  const r_op = document.querySelector('.r-op');
  const o_op = document.querySelector('.o-op');



                                                /*        responsive div    */

  // array for responsive 
  const arr = [craft_Box,mess_Box,robo_Box,lab_Box,room_Box,cert_Box,other_box];

  for(let i = 0 ; i < arr.length ; i++){
       if(window.innerWidth <= 768){
              arr[i].style.width = '100%';  
              arr[i].style.height = '100%';   
              arr[i].style.marginLeft = '0rem';
              arr[i].style.marginTop = '-3rem';
      }
  }





                              /*      Toggling of other button except project button in sidebar    */ 



 // tabs other than project
 const exToggle = [resumeToggle,aboutMeItem,certificate,contact];
 const exBoxes = [resume,room_Box,cert_Box,contBox];

 for(let i = 0 ; i < exToggle.length ; i++){
          exToggle[i].addEventListener('click',function(){
                exBoxes[i].classList.toggle('chat-1');
          })
 }




                                 /*        Project toggling using sidebar project button and option    */



  // to toggle project button for project option menu
const projectMenu = document.querySelector('.project');
const project = document.querySelector('.option-menu');
projectMenu.addEventListener('click', function(){
         if (project.style.display === 'none'){
                project.style.display = 'block';
         } else {
            project.style.display = 'none';
         }
  })
                                
// option menu toggling
const ProjectSideTog = [c_op,a_op,f_op,r_op,o_op];
const ProjectBoxes = [craft_Box,mess_Box,lab_Box,robo_Box,other_box];

for(let i = 0  ; i < ProjectSideTog.length ; i++){
          ProjectSideTog[i].addEventListener('click',function(){
                   ProjectBoxes[i].classList.toggle('chat-1');
          })
}



                                   /*        3d content and connection with articles           */


// button for connection 3d models with articles and toggling
  const toggle3d = [craftToggle,messToggle,labToggle,roboToggle,roomToggle,certToggle];
  const pro3d = [craft_Box,mess_Box,lab_Box,robo_Box,room_Box];
  for(let i = 0 ; i < toggle3d.length ; i++){
           toggle3d[i].addEventListener('click',function(){
                 pro3d[i].classList.toggle('chat-1');    
           })
  }
// button for toggling three.js script
 const land = document.getElementById("land");
 const canva = document.querySelector('.canva-d');
 const pos = document.querySelector('.change-script-btn');
 canva.style.display = 'none';
 land.addEventListener('click',function(){
       if (canva.style.display === 'none'){
                  canva.style.display = 'block';
       }else{
              canva.style.display = 'none';
       }  
       
 });




                                        /*        sidebar toggling and animation          */



// sidebar toggle
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
          document.querySelector('.sidebar').classList.toggle('side-dark');
          document.querySelector('.btn-tog').classList.toggle('btn-tog-t');
  });
// animation of sidebar using anime
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
   

 

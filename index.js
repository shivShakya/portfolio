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

  const craftToggle = document.getElementById('craftstore');
  const messToggle = document.getElementById('mess');
  const chatBox = document.querySelector('.chat-box');
  const chatBox1 = document.querySelector('.chat-box-1');
 

  craftToggle.addEventListener('click', function() {
            chatBox.classList.toggle('chat-1');
   });

  messToggle.addEventListener('click', function(){
          chatBox1.classList.toggle('chat-1');
   })

  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
          document.querySelector('.sidebar').classList.toggle('side-dark');
          document.querySelector('.btn-tog').classList.toggle('btn-tog-t');
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
// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//changing text

function typeWriter(text, index, interval, targetElement) {
      if (index < text.length) {
        document.getElementById(targetElement).innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriter(text, index, interval, targetElement);
        }, interval);
      }
    }
  
    // Call the typing effect function
    document.addEventListener("DOMContentLoaded", function () {
      var roles = ["Full Stack Developer", "UI/UX Designer",'Python Developer'];
      var currentIndex = 0;
      var interval = 150; // Adjust the typing speed (milliseconds)
  
      function changeRole() {
        typeWriter(roles[currentIndex], 0, interval, "typing-text");
        currentIndex = (currentIndex + 1) % roles.length;
        setTimeout(function () {
          // Clear the previous role after typing
          document.getElementById("typing-text").innerHTML = "";
          changeRole();
        }, interval * roles[currentIndex].length + 1000); // Adjust delay between roles
      }
  
      changeRole();
    });
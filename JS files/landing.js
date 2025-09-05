// JS code for mouse pointer
const coords = {
  x: 0,
  y: 0
  };
  const circles = document.querySelectorAll(".circle");
  const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
  ];
  circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  });
  window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
  });
  
  function animateCircles() {
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.style.scale = (circles.length - index) / circles.length;
      circle.x = x;
      circle.y = y;
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
  });
  requestAnimationFrame(animateCircles);
  }
  animateCircles();

// JS code for landing page navbar 
  var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
  window.addEventListener("scroll",function(){
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop>lastScrollTop){
      navbar.style.top="-135px";
  }else{
      navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
  });
   
  // setting up navbar such that it hides itself whenever we are in the main starting point of the landing page
  window.addEventListener('scroll', function() {
  var div = document.getElementById('navbar');
    
  if (window.scrollY <= 700 && window.scrollY>-100) {
    div.style.opacity = '0';
    div.style.transition = 'opacity 500ms ease';
  } else {
    div.style.opacity = '1';
    div.style.transition = 'opacity 500ms ease';
  }
  });

// JS code for menu bar
const menuBar = document.getElementById('menu-bar');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

// Function to hide the menu and reset menu bar
function hideMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.add('hiding');
        setTimeout(() => {
            menu.classList.remove('active');
            menu.classList.remove('hiding');
            logo.classList.remove('hide'); // Explicitly show the logo
            menuBar.classList.remove('active'); // Add this line to reset menu bar
        }, 300);
    }
}

// Toggle menu visibility on menu bar click
menuBar.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        hideMenu();
    } else {
        menu.classList.add('active');
        logo.classList.add('hide');
        menuBar.classList.add('active');
    }
});

// Hide menu when clicking outside its area
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active')) {
        if (!menu.contains(event.target) && !menuBar.contains(event.target)) {
            hideMenu();
        }
    }
});

// Hide menu when scrolling
document.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
        hideMenu();
    }
});

// JS code for form validation

document.querySelector("form[name='myform']").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // Clear previous errors
  [nameError, emailError, messageError].forEach((error) => (error.textContent = ""));
  [name, email, message].forEach((input) => (input.style.border = "none"));

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let hasError = false;

  if (!name.value.trim() || /[^a-zA-Z\s]/.test(name.value.trim())) {
    nameError.textContent = "Name should only contain letters and spaces.";
    name.style.border = "2px solid red";
    hasError = true;
  }

  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    email.style.border = "2px solid red";
    hasError = true;
  }

  if (!message.value.trim()) {
    messageError.textContent = "Please enter your message!";
    message.style.border = "2px solid red";
    hasError = true;
  }

  if (!hasError) {
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.innerHTML = `
      <span class="toast-close">&times;</span>
      <div class="toast-message">
        <span>Thank you, <b>${name.value.trim()}</b>!</span> 📬<br> 
        We'll get back to you as soon as possible. 😊
      </div>
    `;

    document.body.appendChild(toast);

    // Reset form fields
    name.value = "";
    email.value = "";
    message.value = "";

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.remove();
    });

    setTimeout(() => {
      toast.remove();
    }, 8000);
  }
});

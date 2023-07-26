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
        navbar.style.top="-100px";
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
   
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

// JS code for form validation

function validateemail(){  
    // form validation
    var x=document.myform.email.value;  
    var y=document.myform.message.value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (x==""){
      alert("Please enter an email ID!");  
      return false;
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
    }  
    if (y==""){
      alert("Please enter a message!");  
      return false;
    }
  }  
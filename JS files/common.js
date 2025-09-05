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

// JS code for navbar
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
var scrollTop = window.scrollY || document.documentElement.scrollTop;
if(scrollTop>lastScrollTop){
    navbar.style.top="-135px";
}else if(scrollTop==0){
    navbar.style.top = "0";
}
lastScrollTop = scrollTop;
})

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

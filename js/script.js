
const burger = document.querySelector('.burger');
const menu = document.querySelector(".burger-mobile-header");
const blackout = document.querySelector(".blackout");
const navMobile = document.querySelector(".nav-mobile-menu");

burger.addEventListener("click", toggleMenu);
blackout.addEventListener("click", toggleMenu);
navMobile.addEventListener("click", toggleMenu);


function toggleMenu() {
    menu.classList.toggle("_open");
    blackout.classList.toggle("_open");
    burger.classList.toggle("_rotate");
    document.body.style.overflowY = menu.classList.contains("_open") ? 'hidden' : 'auto'
}
//VARIABLES

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const menu = document.querySelector(".menu");

//METHODS

function hamburgerMenuClickHandle() {
    hamburgerMenuIcon.classList.toggle("change");
    menu.classList.toggle("visible");
}

function menuHide() {
    menu.classList.toggle("visible");
    hamburgerMenuIcon.classList.toggle("change");
}

//PAGE LOGIC

hamburgerMenuIcon.addEventListener("click", hamburgerMenuClickHandle);
menu.addEventListener("click", menuHide);

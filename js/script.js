//VARIABLES

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const menu = document.querySelector(".menu");

//METHODS

function hamburgerMenuClickHandle() {
    hamburgerMenuIcon.classList.toggle("change");

    if (hamburgerMenuIcon.classList.contains("change")) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

function menuHide() {
    menu.style.display = "none";
    hamburgerMenuIcon.classList.toggle("change");
}

//PAGE LOGIC

hamburgerMenuIcon.addEventListener("click", hamburgerMenuClickHandle);
menu.addEventListener("click", menuHide);

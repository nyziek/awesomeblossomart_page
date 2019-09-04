//MENU

//Variables

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const menu = document.querySelector(".menu");

//Methods

function hamburgerMenuClickHandle() {
    hamburgerMenuIcon.classList.toggle("change");
    menu.classList.toggle("visible");
}

function menuHide() {
    menu.classList.toggle("visible");
    hamburgerMenuIcon.classList.toggle("change");
}

//Logic

hamburgerMenuIcon.addEventListener("click", hamburgerMenuClickHandle);
menu.addEventListener("click", menuHide);

//GALLERIES SLIDER

//Variables

const slides = document.querySelectorAll(".galleriesSlide");
const sliderNavLeft = document.querySelector(".galleriesNavLeft");
const sliderNavRight = document.querySelector(".galleriesNavRight");
let slideIndex = 0;

//Methods

const slideChangeNext = () => {

    slides[slideIndex].classList.remove("activeSlide");
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("activeSlide");
};

const slideChangePrev = () => {

    slides[slideIndex].classList.remove("activeSlide");
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }

    slides[slideIndex].classList.add("activeSlide");
};

//Logic

sliderNavLeft.onclick = () => {slideChangePrev()};
sliderNavRight.onclick = () => {slideChangeNext()};

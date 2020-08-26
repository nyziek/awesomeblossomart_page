//LAYOUT

if(window.devicePixelRatio > 1.1 ) {
    document.getElementById('body').classList.add("zoom1x");
}

//MENU

//Variables

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const menu = document.querySelector(".menu");
const childrenOfferDetails = document.querySelector(".offerItem1Details");
const adultsOfferDetails = document.querySelector(".offerItem2Details");
const trainingsOfferDetails = document.querySelector(".offerItem3Details");

//Methods

hamburgerMenuClickHandle = () => {
    hamburgerMenuIcon.classList.toggle("change");
    menu.classList.toggle("visible");
};

menuHide = () => {
    menu.classList.toggle("visible");
    hamburgerMenuIcon.classList.toggle("change");
};

openChildrenOfferDetails = () => {
    childrenOfferDetails.classList.add('offerItemDetails--active')
};

closeChildrenOfferDetails = () => {
    childrenOfferDetails.classList.remove('offerItemDetails--active')
};

openAdultsOfferDetails = () => {
    adultsOfferDetails.classList.add('offerItemDetails--active')
};

closeAdultsOfferDetails = () => {
    adultsOfferDetails.classList.remove('offerItemDetails--active')
};

openTrainingsOfferDetails = () => {
    trainingsOfferDetails.classList.add('offerItemDetails--active')
};

closeTrainingsOfferDetails = () => {
    trainingsOfferDetails.classList.remove('offerItemDetails--active')
};

closeAllOfferDetails = () => {
    closeChildrenOfferDetails();
    closeAdultsOfferDetails();
    closeTrainingsOfferDetails();
};

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

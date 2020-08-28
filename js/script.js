//LAYOUT

if(window.devicePixelRatio > 1.1 ) {
    document.getElementById('body').classList.add("zoom1x");
};

//MENU

//Variables

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const menu = document.querySelector(".menu");

//Methods

hamburgerMenuClickHandle = () => {
    hamburgerMenuIcon.classList.toggle("change");
    menu.classList.toggle("visible");
};

menuHide = () => {
    menu.classList.toggle("visible");
    hamburgerMenuIcon.classList.toggle("change");
};

//Logic

hamburgerMenuIcon.addEventListener("click", hamburgerMenuClickHandle);
menu.addEventListener("click", menuHide);

//OFFER

//Variables

const childrenOfferDetails = document.querySelector(".offerItem1Details");
const adultsOfferDetails = document.querySelector(".offerItem2Details");
const trainingsOfferDetails = document.querySelector(".offerItem3Details");

//Methods

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

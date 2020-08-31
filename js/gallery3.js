//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=53; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/trainings/' + i + '.jpg');

    gallery.appendChild(newImg)
}

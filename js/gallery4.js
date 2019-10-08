//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=7; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/achievements/' + i + '.jpg');

    gallery.appendChild(newImg)
}

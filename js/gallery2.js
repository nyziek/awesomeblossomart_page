//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=25; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/children/' + i + '.jpg');

    gallery.appendChild(newImg)
}

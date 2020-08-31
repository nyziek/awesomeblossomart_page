//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=33; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/uv/' + i + '.jpg');

    gallery.appendChild(newImg)
}

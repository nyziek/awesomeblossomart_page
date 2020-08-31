//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=102; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/adults/' + i + '.jpg');

    gallery.appendChild(newImg)
}

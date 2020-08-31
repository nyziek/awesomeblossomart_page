//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=17; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/beauty_forum_body_painting_trophy_2019/' + i + '.jpg');

    gallery.appendChild(newImg)
}

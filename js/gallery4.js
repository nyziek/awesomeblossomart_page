//VARIABLES

const gallery = document.querySelector(".galleria");

//METHODS

for(let i=1; i<=7; i++) {

    const newImg = document.createElement('img');

    newImg.setAttribute('src', './images/gallery/beauty_forum_face_painting_trophy_2019/' + i + '.jpg');

    gallery.appendChild(newImg)
}

const img = [
   'src/img/main-img-01.jpg',
   'src/img/main-img-02.jpg',
   'src/img/main-img-03.jpg',
]

let index = 0
const imgEl = document.getElementById("slideshow")

setInterval(() => {
   index = (index +1) % img.length
   imgEl.src = img[index]
}, 3000);


// const copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);
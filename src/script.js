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


const btn = document.getElementById("btn-view");
const hiddenCards = document.querySelectorAll(".hidden-card")
let isExpanded = false

btn.addEventListener("click", () => {
   hiddenCards.forEach(card => {
      if (isExpanded) {
         card.classList.remove("show")
         setTimeout(() => card.style.display = "none", 300)
      } else {
         card.style.display = "flex"
         setTimeout(() => card.classList.add("show"), 10)
      }
   })

   btn.textContent = isExpanded ? "View All" : "Hide"
   isExpanded = !isExpanded
})
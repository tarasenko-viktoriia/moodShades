const burger = document.getElementById('burger');
const menu   = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('translate-x-full');
  document.body.classList.toggle('overflow-hidden');
});

menu.querySelectorAll('a,button').forEach(el =>
  el.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  })
);


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

document.querySelectorAll('.video-wrapper').forEach(wrapper => {
   const video = wrapper.querySelector('.custom-video');
   const playBtn = wrapper.querySelector('.play-button');

   playBtn.addEventListener('click', () => {
      video.play();
      playBtn.style.display = 'none';
   });

   video.addEventListener('ended', () => {
      playBtn.style.display = 'block';
   });
});


window.addEventListener('load', () => {
   const swiperInstance = new Swiper('.custom-slider', {
      autoHeight: true,
      navigation: {
         prevEl: '.slider-prev',
         nextEl: '.slider-next',
      },
      pagination: {
         el: '.slider-pagination',
         clickable: true,
         bulletClass: 'pagination-bullet',
         bulletActiveClass: 'pagination-bullet--active',
         renderBullet: function (index, className) {
            return `<span class="${className} w-3 h-3 rounded-full bg-gray-400 inline-block"></span>`;
         }
      },
      scrollbar: {
         el: '.slider-scrollbar',
         dragSize: 20,
         snapOnRelease: true,
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 16
         },
         600: {
            slidesPerView: 2,
            spaceBetween: 16
         },
         850: {
            slidesPerView: 3,
            spaceBetween: 16
         },
         1200: {
            slidesPerView: 4,
            spaceBetween: 16
         }
      }
   });
});


const emailInput = document.getElementById('emailInput');
const subscribeBtn = document.getElementById('subscribeBtn');
const message = document.getElementById('message');

const formBlock = document.getElementById('formBlock');
const successBlock = document.getElementById('successBlock');

function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

subscribeBtn.addEventListener('click', () => {
   const email = emailInput.value.trim();

   if (isValidEmail(email)) {
      message.textContent = '';

      formBlock.classList.add('hidden');
      successBlock.classList.remove('hidden');

      setTimeout(() => {
         successBlock.classList.add('hidden');
         formBlock.classList.remove('hidden');
         emailInput.value = '';
      }, 5000);
   } else {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = 'red';
   }
});

document.addEventListener('DOMContentLoaded', () => {
   const track   = document.getElementById('marquee-track');
   const content = document.getElementById('marquee-content');
   const SPEED   = 100;    

   function buildMarquee() {
      track.querySelectorAll('.clone').forEach(el => el.remove());

      const containerWidth = track.parentElement.offsetWidth;
      const contentWidth   = content.scrollWidth;
      let   totalWidth     = contentWidth;

      while (totalWidth < containerWidth + contentWidth) {
         const clone = content.cloneNode(true);
         clone.classList.add('clone');
         track.appendChild(clone);
         totalWidth += clone.scrollWidth;
      }

      injectKeyframes(contentWidth);
      track.style.animation = `marqueeAnim ${contentWidth / SPEED}s linear infinite`;
   }

   function injectKeyframes(shift) {
      let style = document.getElementById('marquee-style');
      if (!style) {
         style = document.createElement('style');
         style.id = 'marquee-style';
         document.head.appendChild(style);
      }
      style.textContent = `
         @keyframes marqueeAnim {
         0%   { transform: translateX(0); }
         100% { transform: translateX(-${shift}px); }
         }
      `;
   }

   buildMarquee();
   window.addEventListener('resize', () => {
      track.style.animation = 'none';
      buildMarquee();
   });
});
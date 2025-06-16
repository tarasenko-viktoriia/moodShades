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
   const wrapper = document.getElementById('subscription-wrapper');

function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const formHTML = `
   <div class="bg-black p-[6.25rem] rounded-[1.5rem] flex justify-between gap-[10px]">
      <h2 class="integral text-[3.75rem] uppercase font-bold tracking-[.0375rem] leading-[1.15] text-white max-w-[55rem]">
         New Drops. New Moods. Straight to You.
      </h2>
      <div id="subscription" class="flex flex-col gap-[.75rem]">
         <div class="relative h-[3.25rem]">
            <input
               id="emailInput"
               placeholder="Enter your email address"
               type="email"
               class="w-full pl-12 pr-4 py-3 rounded-[3.875rem] bg-white satoshi border border-transparent transition-colors"
            />
            <span
               class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-no-repeat bg-center bg-contain"
               style="background-image: url('src/img/icon/sms.svg');">
            </span>
         </div>
         <div class="flex flex-col gap-[.5rem]">
            <button
               id="subscribeBtn"
               class="satoshi shrink-0 bg-white cursor-pointer font-medium py-[1rem] px-[3.375rem] rounded-[3.875rem] leading-[20px]">
               Subscribe to Newsletter
            </button>
            <p id="message" class="text-[.625rem] self-center"></p>
         </div>
         </div>
      </div>
`;

subscribeBtn.addEventListener('click', () => {
   const email = emailInput.value.trim();

   if (isValidEmail(email)) {
      wrapper.innerHTML = `
         <div class="bg-black p-[6.25rem] rounded-[1.5rem] flex justify-center">
            <h2 class="integral text-[3.75rem] uppercase font-bold tracking-[.0375rem] leading-[1.15] text-white max-w-[55rem] text-center">
               You are In. Thanks for Subscribing
            </h2>
         </div>
      `;

      setTimeout(() => {
         wrapper.innerHTML = formHTML;
         rebindSubscriptionHandler();
         }, 5000);
      } else {
         message.textContent = 'Please enter a valid email address.';
         message.style.color = 'red';
         emailInput.classList.add('border-red-500');
      }
});

function rebindSubscriptionHandler() {
   const emailInputNew = document.getElementById('emailInput');
   const subscribeBtnNew = document.getElementById('subscribeBtn');
   const messageNew = document.getElementById('message');

   subscribeBtnNew.addEventListener('click', () => {
      const email = emailInputNew.value.trim();

      if (isValidEmail(email)) {
         wrapper.innerHTML = `
            <div class="bg-black p-[6.25rem] rounded-[1.5rem] flex justify-center">
               <h2 class="integral text-[3.75rem] uppercase font-bold tracking-[.0375rem] leading-[1.15] text-white max-w-[55rem] text-center">
               You are In. Thanks for Subscribing
               </h2>
            </div>
         `;
         setTimeout(() => {
            wrapper.innerHTML = formHTML;
            rebindSubscriptionHandler();
         }, 5000);
         } else {
         messageNew.textContent = 'Please enter a valid email address.';
         messageNew.style.color = 'red';
         emailInputNew.classList.add('border-red-500');
         }
      });
}
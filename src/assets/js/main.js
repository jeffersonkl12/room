import '/src/assets/css/style.css'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  spaceBetween: 100,
  speed: 500,
})

document.querySelector('.slider-btn-next').addEventListener('click', () => {
  swiper.slideNext()
})

document.querySelector('.slider-btn-previous').addEventListener('click', () => {
  swiper.slidePrev()
})

// console.log(Swiper.Navigation);

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

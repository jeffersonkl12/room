import '/src/assets/css/style.css'
import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "swiper/css/effect-fade" 

const swiper = new Swiper('.swiper', {
  modules: [Navigation, EffectFade],
  spaceBetween: 30,
  speed: 500,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-previous',
  },
})

// document.querySelector('.slider-btn-next').addEventListener('click', () => {
//   swiper.slideNext()
// })

// document.querySelector('.slider-btn-previous').addEventListener('click', () => {
//   swiper.slidePrev()
// })

// console.log(Swiper.Navigation);

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

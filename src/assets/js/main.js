import "/src/assets/css/style.css";
// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,
});

document.querySelector(".slider-btn-next").addEventListener("click", () => {
  swiper.slideNext();
});

document.querySelector(".slider-btn-previous").addEventListener("click", () => {
  swiper.slidePrev();
});

// console.log(Swiper.Navigation);

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

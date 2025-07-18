import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export default function initSwiper() {
  console.log("✅ Initialisiere Swiper...");
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 2 }, // maximal 2 auf großen Screens
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  console.log("✅ Swiper erfolgreich initialisiert!");
}

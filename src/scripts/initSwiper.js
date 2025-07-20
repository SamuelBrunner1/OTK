import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function initSwiper() {
  console.log('✅ Swiper wird initialisiert...');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    speed: 600,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,

    breakpoints: {
      640: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    grabCursor: true,
  });
}

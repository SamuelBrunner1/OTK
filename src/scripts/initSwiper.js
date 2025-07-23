import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function initSwiper() {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Swiper wird initialisiert...');

    const swiperEl = document.querySelector('.swiper');
    if (!swiperEl) {
      console.warn('⚠️ Kein Swiper-Element gefunden!');
      return;
    }

    new Swiper(swiperEl, {
      modules: [Navigation, Pagination],
      loop: true,
      speed: 600,
      spaceBetween: 20,
      slidesPerView: 1,

      observer: true,
      observeParents: true,
      resizeObserver: true,

      // ✅ Responsive Einstellungen
      breakpoints: {
        640: { slidesPerView: 1.2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: true },
        1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
      },

      // ✅ Navigation
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // ✅ Pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      grabCursor: true,
      touchRatio: 1,
      threshold: 10,
    });
  });
}

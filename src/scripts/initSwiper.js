import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export default function initSwiper() {
  console.log("✅ Initialisiere Swiper...");
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    allowTouchMove: true,  // ✅ Swipe bleibt aktiv
    simulateTouch: true,   // ✅ Touch-Gesten erlaubt
    watchOverflow: true,
    spaceBetween: 40,
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 700,
  });
  console.log("✅ Swiper erfolgreich initialisiert!");
}

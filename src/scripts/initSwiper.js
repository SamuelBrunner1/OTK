import Swiper, { Navigation, Pagination } from 'swiper';

export default function initSwiper() {
  console.log('✅ Swiper wird initialisiert...');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true, // Endlos-Schleife
    speed: 600, // Weiche Übergänge
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,

    // ✅ Breakpoints für Responsive Design
    breakpoints: {
      640: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
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

    // ✅ Touch Gestures für Mobile
    grabCursor: true,
  });
}

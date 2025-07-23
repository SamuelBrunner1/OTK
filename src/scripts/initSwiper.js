import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function initSwiper() {
  console.log('✅ Swiper Initialisierung gestartet...');

  // Prüfen, ob ein Swiper-Container existiert
  const swiperEl = document.querySelector('.swiper');
  if (!swiperEl) {
    console.warn('⚠️ Kein Swiper-Element gefunden.');
    return;
  }

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    // ✅ Allgemeine Einstellungen
    loop: true,
    speed: 600,
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    allowTouchMove: true,

    // ✅ Touch-Optimierung
    touchRatio: 1,
    threshold: 5, // Geringe Verzögerung für bessere Mobile-Performance

    // ✅ Dynamisches Beobachten
    observer: true,
    observeParents: true,

    // ✅ Responsive Einstellungen
    breakpoints: {
      640: { slidesPerView: 1.2, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
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

    // ✅ Debugging
    on: {
      init: () => console.log('✅ Swiper wurde erfolgreich initialisiert'),
      resize: () => console.log('📏 Swiper hat sich angepasst'),
    },
  });

  console.log('Swiper ready:', swiper);
}

export default function initMobileMenu() {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  if (!burgerBtn || !mobileMenu) return;

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

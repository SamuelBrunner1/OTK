export default function initMobileMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-link");

  if (!burgerBtn || !mobileMenu) return;

  // ✅ Menü öffnen/schließen
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // ✅ Menü schließen, wenn ein Link geklickt wird
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

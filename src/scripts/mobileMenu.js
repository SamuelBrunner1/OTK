export default function initMobileMenu() {
  console.log("✅ Mobile Menu JS geladen...");

  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!burgerBtn || !mobileMenu) {
    console.warn("❌ Burger-Menü-Elemente nicht gefunden!");
    return;
  }

  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Animation für Burger → X
    burgerBtn.classList.toggle("open");
  });

  // Menü schließen, wenn ein Link angeklickt wird
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      burgerBtn.classList.remove("open");
    });
  });

  // ✅ Smooth Scroll für mobile Links
  mobileLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });
}

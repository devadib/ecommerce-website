let header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  //   console.log(document.documentElement.scrollTop);
  header.classList.toggle("scroll-nav", window.scrollY > 10080);
});

const menuBtn = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");

function openMenu() {
  mobileMenu.classList.replace("translate-x-full", "translate-x-0");

  overlay.classList.remove("opacity-0", "invisible");
  overlay.classList.add("opacity-100", "visible");
}

function closeMenuHandler() {
  mobileMenu.classList.replace("translate-x-0", "translate-x-full");

  overlay.classList.remove("opacity-100", "visible");
  overlay.classList.add("opacity-0", "invisible");
}

menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMenuHandler);

// کلیک روی پس‌زمینه هم منو را ببندد
overlay.addEventListener("click", closeMenuHandler);

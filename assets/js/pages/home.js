let header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  //   console.log(document.documentElement.scrollTop);
  header.classList.toggle("scroll-nav", window.scrollY > 40);
});

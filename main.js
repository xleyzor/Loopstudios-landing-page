const bar = document.querySelector(".bars");
const navbar = document.querySelector(".mobile-navbar");

bar.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

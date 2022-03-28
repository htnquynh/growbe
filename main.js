import "./tailwind.css";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let menu = document.getElementById("btn-menu");

function toggleMenu(e) {
  console.log("hello");
  let navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("top-20");
  navLinks.classList.toggle("opacity-100");
}

menu.onclick = toggleMenu;

var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

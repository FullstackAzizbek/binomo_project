let swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 700,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 5,
    },
    576: {
      slidesPerView: 3,
    },
    100: {
      slidesPerView: 2,
    },
  },
});

let nav_ul = document.querySelector(".header_ul"),
  nav_li = document.querySelectorAll(".header_ul .header_li"),
  header = document.querySelector("header"),
  header_box = document.querySelector(".header_box"),
  menu_btn = document.querySelector(".menu_btn"),
  close_btn = document.querySelector(".close_btn"),
  loader = document.querySelector(".loader_box");

nav_li.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".header_ul .active").classList.remove("active");
    list.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#fff";
    header_box.style.marginBottom = "0";
  } else {
    header.style.backgroundColor = "transparent";
    header_box.style.marginBottom = "20px";
  }
});

menu_btn.addEventListener("click", () => {
  nav_ul.classList.add("active_header");
  close_btn.style.color = "#fff";
});

close_btn.addEventListener("click", () => {
  nav_ul.classList.remove("active_header");
  close_btn.style.color = "transparent";
});

nav_ul.addEventListener("click", () => {
  nav_ul.classList.remove("active_header");
});

setTimeout(() => {
  loader.classList.remove("loading");
  header.style.zIndex = "9999999999999999999999999";
}, 3000);

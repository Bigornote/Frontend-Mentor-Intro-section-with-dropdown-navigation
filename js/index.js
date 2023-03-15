const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const overlayMenu = document.querySelector(".menu-burger-overlay");
const li = document.querySelectorAll(".nav-item li");

const toggleOverlay = () => {
  burgerIcon.addEventListener("click", () => {
    overlayMenu.classList.toggle("active");
  });
  closeIcon.addEventListener("click", () => {
    overlayMenu.classList.toggle("active");
  });
};

const rotateImg = () => {};

const toggleSubnav = () => {
  li.forEach((parent) => {
    parent.addEventListener("click", () => {
      const subMenu = parent.querySelector(".sub-menu");
      subMenu.classList.toggle("active");
      const img = parent.querySelector("img");
      img.classList.toggle("rotate");
    });
  });
};

toggleOverlay();
toggleSubnav();

const displayOverlay = () => {
  if (window.innerWidth < 960) {
  }
};

window.addEventListener("DOMContentLoaded", displayOverlay);

const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const overlayMenu = document.querySelector(".menu-burger-overlay");
const li = document.querySelectorAll(".nav-item li");
const navContainer = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar");

const toggleOverlay = () => {
  burgerIcon.addEventListener("click", () => {
    overlayMenu.classList.toggle("active");
  });
  closeIcon.addEventListener("click", () => {
    overlayMenu.classList.toggle("active");
  });
};

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

const displayOverlay = () => {
  if (window.innerWidth > 960) {
    navbar.appendChild(navContainer);
  } else {
    overlayMenu.appendChild(navContainer);
  }
};

toggleOverlay();
toggleSubnav();
displayOverlay();
window.addEventListener("resize", displayOverlay);

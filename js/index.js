const menu = document.querySelector(".navigation-list");
const show = document.getElementById("show");
const hide = document.getElementById("hide");
const tooltip = document.querySelector(".tooltip");

function setInitialNavbarState() {
  if (menu.classList.contains("visible")) {
    show.classList.remove("visible");
    hide.classList.add("visible");
  } else {
    show.classList.add("visible");
    hide.classList.remove("visible");
  };
}

function initialTooltipDisplay() {
  tooltip.classList.add("visible");

  setTimeout(() => {
    tooltip.classList.remove("visible");
  }, 3000);
};

function showNavbar() {
  menu.classList.add("visible");
  show.classList.remove("visible");
  hide.classList.add("visible");
};

function hideNavbar() {
  menu.classList.remove("visible");
  show.classList.add("visible");
  hide.classList.remove("visible");
};

document.addEventListener("DOMContentLoaded", () => {
  setInitialNavbarState();
  initialTooltipDisplay();
});


const menu = document.querySelector(".navigation-list");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

function setInitialNavbarState() {
  if (menu.classList.contains("visible")) {
    show.classList.remove("visible");
    hide.classList.add("visible");
  } else {
    show.classList.add("visible");
    hide.classList.remove("visible");
  };
}

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

document.addEventListener("DOMContentLoaded", setInitialNavbarState);


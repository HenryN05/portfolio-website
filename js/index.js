const navbar = document.querySelector(".navigation-list");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");

function setInitialNavbarState() {
  if (navbar.style.display === "none") {
    downArrow.style.display = "block";
    upArrow.style.display = "none";
  } else {
    downArrow.style.display = "none";
    upArrow.style.display = "block";
  };
}

function showNavbar() {
  navbar.style.display = "block";
  downArrow.style.display = "none";
  upArrow.style.display = "block";
};

function hideNavbar() {
  navbar.style.display = "none";
  downArrow.style.display = "block";
  upArrow.style.display = "none";
};

document.addEventListener("DOMContentLoaded", setInitialNavbarState);


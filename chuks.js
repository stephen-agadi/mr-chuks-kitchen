const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});



// function toggleMenu() {
//   document.querySelector(".hamburger").classList.toggle("active");
//   document.querySelector(".nav-links").classList.toggle("active");
// }


function toggleDropdown() {
  const menu = document.getElementById("menuList");
  const arrow = document.getElementById("arrow");

  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    arrow.innerHTML = "&#9662;";
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    arrow.innerHTML = "&#9652;";
  }
}
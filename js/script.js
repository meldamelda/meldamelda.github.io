const navbarNav = document.querySelector(".navbar-nav");

// toggle sidebar
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

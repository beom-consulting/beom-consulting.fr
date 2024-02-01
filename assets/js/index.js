const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar__links-text");
const navBtn = document.querySelector(".navbar-burger");
const mobileNav = document.querySelector(".mobile-navbar");

const body = document.querySelector("body");
const header = document.querySelector("header");

const contactBtn = document.querySelector("#contact-btn");
const menuIcon = document.querySelector("#navbar-burger-icon");

let isSectionHome = false;

function changeNavState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) =>
    link.classList.remove("navbar__links-text--active")
  );
  if (window.innerWidth < 1024) {
    index = index + 5;
  }
  navLinks[index].classList.add("navbar__links-text--active");
  if (window.scrollY < 50) {
    header.classList.add("header--transition");
    header.classList.remove("header--active");
    isSectionHome = true;
  } else {
    header.classList.add("header--active");
    isSectionHome = false;
  }
}

changeNavState();

window.addEventListener("scroll", changeNavState);

function toggleMobileNav() {
  if (window.innerWidth > 1024) return;

  body.classList.toggle("no-scroll");
  mobileNav.classList.toggle("mobile-navbar--active");
  navBtn.classList.toggle("navbar-burger--active");
  if (isSectionHome) {
    header.classList.remove("header--transition");
    header.classList.toggle("header--active");
  }
  menuIcon.src = navBtn.classList.contains("navbar-burger--active")
    ? "./assets/img/close.svg"
    : "./assets/img/menu-burger.svg";
}

navBtn.addEventListener("click", toggleMobileNav);

contactBtn.addEventListener("click", toggleMobileNav);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileNav);
});

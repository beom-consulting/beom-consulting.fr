const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar__links-text");
const navBtn = document.querySelector(".navbar-burger");
const mobileNav = document.querySelector(".mobile-navbar");

const body = document.querySelector("body");
const header = document.querySelector("header");

const contactBtn = document.querySelector("#contact-btn");
const menuIcon = document.querySelector("#navbar-burger-icon");

let prevScrollpos = window.scrollY;
let isSectionHome = false;

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("body-accent"));
  if (window.innerWidth < 640) {
    index = index + 5;
  }
  navLinks[index].classList.add("body-accent");
  if (navLinks[index].attributes.href.value === "#home") {
    isSectionHome = true;
    header.classList.remove("header--active");
  } else {
    isSectionHome = false;
    header.classList.add("header--active");
  }
}

function toggleMobileNav() {
  if (window.innerWidth > 640) return;

  body.classList.toggle("no-scroll");
  mobileNav.classList.toggle("mobile-navbar--active");
  navBtn.classList.toggle("navbar-burger--active");
  if (isSectionHome) {
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

changeLinkState();

window.addEventListener("scroll", changeLinkState);

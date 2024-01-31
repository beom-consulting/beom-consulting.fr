const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar__links-text");
const navBtn = document.querySelector(".navbar-burger");
const mobileNav = document.querySelector(".mobile-navbar");

const body = document.querySelector("body");
const header = document.querySelector("header");

const contactBtn = document.querySelector("#contact-btn");
const menuIcon = document.querySelector("#navbar-burger-icon");

let isSectionHome = false;

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) =>
    link.classList.remove("navbar__links-text--active")
  );
  if (window.innerWidth < 1024) {
    index = index + 5;
  }
  navLinks[index].classList.add("navbar__links-text--active");
  header.classList.add("header--transition");
  if (navLinks[index].attributes.href.value === "#home") {
    isSectionHome = true;
    header.classList.remove("header--active");
  } else {
    isSectionHome = false;
    header.classList.add("header--active");
  }
}

changeLinkState();

window.addEventListener("scroll", changeLinkState);

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

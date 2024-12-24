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

const linksObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) =>
          link.classList.remove("navbar__links-text--active")
        );
        const link = document.querySelectorAll(
          `.navbar__links-text[href="#${entry.target.id}"]`
        );
        if (link) {
          link.forEach((l) => l.classList.add("navbar__links-text--active"));
        }
      }
    });
  },
  {
    threshold: window.innerWidth > 1024 ? 0.75 : 0.5,
  }
);

sections.forEach((section) => {
  linksObserver.observe(section);
});

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

function openClosePopIn(index) {
  const popin = document.getElementById('offer-' + index);
  popin?.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

document.querySelectorAll('.offer-popin').forEach((element, index) => {
  element.addEventListener('click', _ => openClosePopIn(index + 1));
  element.firstElementChild.addEventListener('click', event => event.stopPropagation());
});

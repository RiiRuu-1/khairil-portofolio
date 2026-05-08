/* ===============================
   REVEAL ON SCROLL
================================ */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===============================
   NAVBAR SCROLL EFFECT
================================ */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(8, 10, 18, 0.84)";
    navbar.style.boxShadow = "0 18px 50px rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.background = "rgba(10, 12, 20, 0.62)";
    navbar.style.boxShadow = "0 18px 45px rgba(0, 0, 0, 0.25)";
  }
});

/* ===============================
   ACTIVE NAV LINK
================================ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

function setActiveNavLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 170;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);

/* ===============================
   TILT CARD EFFECT
================================ */
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
});

/* ===============================
   SMALL ENTRANCE DELAY
================================ */
const gfxCards = document.querySelectorAll(".gfx-card");
const amvCards = document.querySelectorAll(".amv-card");
const socialLinks = document.querySelectorAll(".social-link");

function addDelay(items, delayStep) {
  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * delayStep}ms`;
  });
}

addDelay(gfxCards, 70);
addDelay(amvCards, 90);
addDelay(socialLinks, 70);
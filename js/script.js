// Scroll spy: Track active section and highlight corresponding nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";
  let minDistance = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const distanceFromTop = Math.abs(rect.top);

    if (distanceFromTop < minDistance && rect.top < window.innerHeight) {
      minDistance = distanceFromTop;
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});


//the Scroll to Top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

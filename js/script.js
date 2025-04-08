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

// Scroll to Top Button
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

// Theme toggle
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggleButton) {
  function toggleTheme() {
    document.body.classList.toggle('theme-toggle--dark');
    
    if (document.body.classList.contains('theme-toggle--dark')) {
      themeIcon.textContent = '☀';  
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.textContent = '☽';  
      localStorage.setItem('theme', 'light');
    }
  }

  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('theme-toggle--dark');
      themeIcon.textContent = '☀';  
    }
  });

  themeToggleButton.addEventListener('click', toggleTheme);
}
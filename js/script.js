{
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
  const themeLabel = document.getElementById('theme-label');

  if (themeToggleButton) {
    function updateThemeUI(isDark) {
      if (isDark) {
        themeIcon.textContent = '☀';
        themeLabel.textContent = 'light';
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.textContent = '☽';
        themeLabel.textContent = 'dark';
        localStorage.setItem('theme', 'light');
      }
    }

    function toggleTheme() {
      const isDark = document.body.classList.toggle('theme-toggle--dark');
      updateThemeUI(isDark);
    }

    window.addEventListener('load', () => {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      if (isDark) {
        document.body.classList.add('theme-toggle--dark');
      }
      updateThemeUI(isDark);
    });

    themeToggleButton.addEventListener('click', toggleTheme);
  }

  // See/Hidden projects
  const showMoreButton = document.getElementById('show-more-projects');
  const hiddenProjects = document.querySelectorAll('.projects .hidden');
  let projectsVisible = false;

  showMoreButton.addEventListener('click', () => {
    if (projectsVisible) {
      hiddenProjects.forEach(project => {
        project.classList.add('hidden');
      });
      showMoreButton.textContent = "See More Projects";
    } else {
      hiddenProjects.forEach(project => {
        project.classList.remove('hidden');
      });
      showMoreButton.textContent = "Hide Projects";
    }
    projectsVisible = !projectsVisible;
  });
}


// GitHub API
let visibleProjects = 4; 
const projectsContainer = document.querySelector('.projects__list');
const showMoreButton = document.getElementById('show-more-projects');

const fetchProjects = async () => {
  const username = 'Dor-Ka'; 
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    const projects = await response.json();

    const formatProjectName = (name) => {
      return name
        .replace(/(frontend-|youcode-|youcode-react-|react-|vanilla-js-)/gi, "") 
        .replace(/-/g, " ") 
        .replace(/\b\w/g, (char) => char.toUpperCase()); 
    };

    const getProjectTech = (name) => {
      return /react/i.test(name) ? 'React' : 'JavaScript';
    };

    const filteredProjects = projects.filter(project => /frontend/i.test(project.name));

    const renderProjects = () => {
      const projectsToRender = filteredProjects.slice(0, visibleProjects);
      projectsContainer.innerHTML = ''; 

      projectsToRender.forEach(project => {
        const projectElement = document.createElement('article');
        projectElement.classList.add('project');

        const projectLink = document.createElement('a');
        projectLink.href = project.html_url; 
        projectLink.target = '_blank'; 
        projectLink.classList.add('project__link'); 

        projectElement.innerHTML = `
          <h3 class="project__name">${formatProjectName(project.name)}</h3>
          <section>
            <ul class="project__tech">
              <li>${getProjectTech(project.name)}</li>
            </ul>
          </section>
          <section class="project__description">
            ${project.description || 'No description available'}
          </section>
        `;

        projectLink.appendChild(projectElement);
        projectsContainer.appendChild(projectLink);
      });

      const remainingProjects = filteredProjects.length - visibleProjects;
      if (remainingProjects > 0) {
        showMoreButton.textContent = `See More Projects (${remainingProjects} left)`;
      } else {
        showMoreButton.style.display = 'none';
      }
    };

    renderProjects();

    showMoreButton.addEventListener('click', () => {
      visibleProjects += 4; 
      renderProjects(); 
      
      const remainingProjects = filteredProjects.length - visibleProjects;
      if (remainingProjects > 0) {
        showMoreButton.textContent = `See More Projects (${remainingProjects} left)`;
      } else {
        showMoreButton.textContent = 'Hide Projects'; 
      }
    });

  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
  }
};

document.addEventListener('DOMContentLoaded', fetchProjects);

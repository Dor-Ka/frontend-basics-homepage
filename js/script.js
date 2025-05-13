// Theme toggle
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeLabel = document.getElementById('theme-label');

if (themeToggleButton) {
  function updateThemeUI(isDark) {
    themeIcon.textContent = isDark ? '☀' : '☽';
    themeLabel.textContent = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
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

// GitHub API
let visibleProjects = 4;
let showingAll = false;

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
      if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = '<p>No projects found.</p>';
        return;
      }
    
      const projectsToRender = showingAll
        ? filteredProjects
        : filteredProjects.slice(0, visibleProjects);
    
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
    
      updateButton();
    };
    

    const updateButton = () => {
      if (filteredProjects.length <= visibleProjects) {
        showMoreButton.style.display = 'none';
        return;
      }

      showMoreButton.style.display = 'block';

      if (showingAll) {
        showMoreButton.textContent = 'Hide Projects';
      } else {
        const remaining = filteredProjects.length - visibleProjects;
        showMoreButton.textContent = `See More Projects (${remaining} left)`;
      }
    };

    renderProjects();

    if (showMoreButton) {
      showMoreButton.addEventListener('click', () => {
        showingAll = !showingAll;
        renderProjects();
      });
    }
    

  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
  }
  
};

document.addEventListener('DOMContentLoaded', async () => {
  await fetchProjects();
});

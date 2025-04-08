# Frontend Basics Homepage

A simple developer homepage built with HTML, CSS and JavaScript.  
This is the first step of a full portfolio project, built step by step — from basics to more advanced features.

## 👩‍💻 Live Demo

View the project: [frontend basics homepage](https://dor-ka.github.io/frontend-basics-homepage/)

## 🛠️ Built With:

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Folder Structure

frontend-basics-homepage/  
├── index.html  
├── css  
&emsp;├── style.css     
&emsp;├── nav.css      
&emsp;├── section.css  
&emsp;└── about.css   
&emsp;└── skills.css    
&emsp;└── projects.css    
&emsp;└── contact.css      
&emsp;└── scroll-to-up.css   
├── js/script.js   
├── img/profile.jpg   
└── README.md  

## 🚀 Progress and Features

- **v0.1** (2025-04-06):
    - Initial structure with header and basic styling
    - Basic global styles
    - Applied semantic HTML tags (`<header>`, `<main>`, `<footer>`)

- **v0.2** (2025-04-07):
    - Added "About Me" section with content and profile photo
    - Split styles into global (`style.css`) and section-specific (`about.css`)
    - Improved HTML structure using semantic tags
    - Applied clean, modular CSS using BEM methodology
    - Styled "About Me" section
    - Introduced profile image for "About Me" section

- **v0.3** (2025-04-07):
    - Added "Skills" section showcasing frontend technologies
    - Styled "Skills" section with grid layout for a responsive design
    - Introduced hover effects for interactive elements
    - Continued BEM methodology for styling consistency
    - Enhanced visual hierarchy with typography and color improvements

- **v0.4** (2025-04-07):
    - Added "Projects" section with sample project showcasing skills
    - Applied consistent styling for project items
    - Linked to GitHub and live demo for the project

- **v0.5** (2025-04-07):
    - Added "Contact Me" section with contact details
    - Created a new CSS file (`contact.css`) for the Contact section styles
    - Updated link text for LinkedIn and GitHub to user-specific handles

- **v0.6** (2025-04-07):
    - Added navigation bar with anchor links to each section
    - Styled navigation using Flexbox and custom hover effects
    - Enabled smooth scroll behavior via global styles

- **v0.7** (2025-04-08):
    - Updated navigation to stay visible while scrolling
    - Added JavaScript functionality to highlight active section link during scroll (scroll spy)
    - Enhanced scroll behavior and fixed issues with active link not updating on large screens

- **v0.8** (2025-04-08):
    - **Responsive Design Enhancements**:
        - Improved media queries for navigation, projects, and contact sections for better responsiveness across devices.
        - Adjusted navigation layout (grid) for smaller screens (below 470px).
        - Applied responsive grid layout for "My Projects" section to adjust the number of columns based on screen width.
        - Added `word-wrap: break-word;` to the contact section for the email address to prevent overflow on screens below 420px.
    - **CSS Improvements**:
        - Optimized margins and padding for better responsiveness on small screens.
        - Minor styling adjustments to maintain consistency and readability across different screen sizes.

- **v0.9** (2025-04-08):
    - Scroll to Top Button:
        - Added a floating "Scroll to Top" button for better navigation on longer pages.
        - Implemented smooth scroll behavior when clicking the button.
        - Used inline SVG arrow icon for styling flexibility and color control.
        - Added hover effect with rotation animation for the icon.
        - Separated related styles into a new CSS file (scroll.css) for maintainability.

- **v1.0** (2025-04-08):
    - **Accessibility Improvements**:
        - Added `aria-label` to project links for better accessibility.
        - Improved semantic HTML by using `<article>`, `<section>`, `<header>`, and `<footer>` elements.
        - Enhanced link accessibility with hover, focus, and active states for better navigation.
     - **Theme Toggle**:
        - Added functionality to toggle between light and dark modes.
        - Persisted theme preference in `localStorage` for a consistent user experience across sessions.
        - Updated theme icon accordingly based on the current theme (☽ for light, ☀ for dark).
        - Applied dark mode styles for various elements including navigation, sections, and project items.

## 📅 Versions

- **v0.1** (2025-04-06): Initial structure with header and basic styling
- **v0.2** (2025-04-07): Added "About Me" section, styled with BEM methodology
- **v0.3** (2025-04-07): Added "Skills" section and implemented grid layout for responsive design
- **v0.4** (2025-04-07): Added "Projects" section and implemented consistent styling for project items
- **v0.5** (2025-04-07): Added "Contact Me" section and moved styles to a separate file
- **v0.6** (2025-04-07): Added navigation bar with anchor links and smooth scrolling
- **v0.7** (2025-04-08): Added sticky navigation bar and scroll spy functionality.
- **v0.8** (2025-04-08): Added responsive design improvements and media queries for navigation, projects, and contact sections.
- **v0.9** (2025-04-08): Scroll to Top button with smooth scroll, SVG icon, hover animation, and dedicated styling
- **v1.0** (2025-04-08): Finalized homepage layout, improved styling, accessibility improvements, and theme toggle functionality with localStorage support.
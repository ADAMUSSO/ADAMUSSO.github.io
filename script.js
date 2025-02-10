// Function to check if multiple sections are in the viewport
function checkVisibility() {
    const sections = document.querySelectorAll('.second-section, .skills-section, .project-section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // Add the 'visible' class only when the section enters the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !section.classList.contains('visible')) {
            section.classList.add('visible');
        }
    });
}

// Trigger the check when the user scrolls
window.addEventListener('scroll', checkVisibility);

// Check visibility on page load in case any section is already in view
document.addEventListener('DOMContentLoaded', checkVisibility);
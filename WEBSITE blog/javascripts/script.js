// Function to check if the section is in the viewport
function checkVisibility() {
    const section = document.querySelector('.second-section');
    const rect = section.getBoundingClientRect();
    
    // Add the 'visible' class only once when the section enters the viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0 && !section.classList.contains('visible')) {
        section.classList.add('visible');
    }
}

// Trigger the check when the user scrolls
window.addEventListener('scroll', checkVisibility);

// Check visibility on page load in case it's already in view
checkVisibility();



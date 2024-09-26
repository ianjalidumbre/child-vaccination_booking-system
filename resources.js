// JavaScript code for your resources page (if needed)
// You can add interactive functionality here.
// Example: Expand/collapse sections, show/hide details, etc.

// Sample JavaScript code to make the sections expand/collapse (optional):
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.classList.toggle('expanded');
        });
    });
});

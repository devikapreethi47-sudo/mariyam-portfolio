// Main JavaScript for Mariyam Banu's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Current year for footer
    const year = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = `Built with ❤️ by Mariyam Banu &copy; ${year}`;
    }

    // Handle Resume View/Download
    const resumeBtn = document.querySelector('a[href="WhatsApp Image 2026-05-02 at 8.09.50 PM.jpeg"]');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            // Optional: Add logic for analytics or specialized viewer
            console.log('Resume viewed/downloaded');
        });
    }

    // Smooth page transitions (Simple fade out)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add fade-out effect if desired
        });
    });
});

// Utility to check if element is in viewport
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

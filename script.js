// Simple script to add interactivity to the portfolio

// Ensure all external links open in a new tab
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Smooth scroll effect (optional if using anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth hover effect for gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = "transform 0.3s, box-shadow 0.3s";
    });

    item.addEventListener('mouseleave', () => {
        item.style.transition = "transform 0.3s, box-shadow 0.3s";
    });
});

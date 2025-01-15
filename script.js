// Script for smooth scrolling navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href').replace('/', '');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});

// Dynamic footer year update
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Ananda (alterwriter / leafforwriting)`;

// Placeholder functionality for business contact
const businessSection = document.querySelector('#business');
const contactButton = document.createElement('button');
contactButton.textContent = 'Contact Us';
contactButton.style.marginTop = '1rem';

contactButton.addEventListener('click', () => {
    alert('Thank you for reaching out! Please email us at boxsploit@example.com.');
});

businessSection.appendChild(contactButton);

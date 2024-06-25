document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;

    // Hamburger menu functionality
    const nav = document.querySelector('nav');
    const hamburgerButton = document.createElement('button');
    hamburgerButton.textContent = '☰'; // Hamburger icon
    hamburgerButton.classList.add('hamburger');

    nav.insertAdjacentElement('beforebegin', hamburgerButton);

    hamburgerButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamburgerButton.textContent = nav.classList.contains('open') ? '✖' : '☰'; // Toggle between hamburger and close icons
    });
});
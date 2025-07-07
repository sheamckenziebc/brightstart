// BrightStart JavaScript
// This file can be used for future JavaScript functionalities.

console.log("BrightStart script.js loaded.");

// Example: Smooth scrolling for anchor links (if you add any)
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

// Example: Active navigation link highlighting (basic)
/*
const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}
*/

document.addEventListener('DOMContentLoaded', () => {
    // Image slider logic
    const slider = document.querySelector('.image-slider');
    if (slider) {
        const firstImageClone = slider.firstElementChild.cloneNode(true);
        slider.appendChild(firstImageClone);
    }
});


let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY && window.scrollY > 100) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
}); 
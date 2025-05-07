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
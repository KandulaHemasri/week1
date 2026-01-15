// const toggleBtn = document.getElementById('theme');

// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });



const themeBtn = document.getElementById("theme");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});




    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // toggles menu
        hamburger.classList.toggle("open");  // optional animation
    });
});


// const toggleBtn = document.getElementById('theme');

// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });



    const toggleBtn = document.getElementById("theme");
    const body = document.body;
 
    toggleBtn.textContent = "Dark Mode";

    /* Dark Mode Toggle */
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Light Mode";
        } else {
            toggleBtn.textContent = "Dark Mode";
        }
    });


    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // toggles menu
        hamburger.classList.toggle("open");  // optional animation
    });
});


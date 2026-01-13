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


/* Hamburger toggle (open + close) */
// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

// /* Close menu when clicking a nav link */
// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//         navLinks.classList.remove("active");
//     });
// });

// /* Close menu when screen resizes to desktop */
// window.addEventListener("resize", () => {
//     if (window.innerWidth > 768) {
//         navLinks.classList.remove("active");
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {

//     const hamburger = document.getElementById("hamburger");
//     const navLinks = document.getElementById("navLinks");
//     const themeBtn = document.getElementById("theme");
//     const body = document.body;

//     /* Hamburger toggle */
//     hamburger.addEventListener("click", () => {
//         navLinks.classList.toggle("active");
//     });

//     /* Close menu on link click */
//     document.querySelectorAll(".nav-links a").forEach(link => {
//         link.addEventListener("click", () => {
//             navLinks.classList.remove("active");
//         });
//     });

//     /* Dark mode toggle */
//     themeBtn.addEventListener("click", () => {
//         body.classList.toggle("dark-mode");
//         themeBtn.textContent = body.classList.contains("dark-mode")
//             ? "Light Mode"
//             : "Dark Mode";
//     });

// });

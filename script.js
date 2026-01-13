// const toggleBtn = document.getElementById('theme');

// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });



    const toggleBtn = document.getElementById("theme");
    const body = document.body;
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");


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


    /* Hamburger Menu Toggle */
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a link (mobile UX fix) */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
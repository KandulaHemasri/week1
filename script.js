// const toggleBtn = document.getElementById('theme');

// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });



    const toggleBtn = document.getElementById("theme");
    const body = document.body;
    toggleBtn.textContent = "Light Mode";

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Light Mode";
        } else {
            toggleBtn.textContent = "Dark Mode";
        }
    });


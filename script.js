document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        if (window.location.pathname.endsWith("index.html") && link.getAttribute("href") === "index.html") {
            link.classList.add("active");
        }
        if (window.location.pathname.endsWith("projects.html") && link.getAttribute("href") === "projects.html") {
            link.classList.add("active");
        }
    });
});

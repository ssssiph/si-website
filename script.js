document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        if (window.location.pathname.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});

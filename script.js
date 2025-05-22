document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        link.classList.remove("active");

        if ((currentPage === "index.html" && link.getAttribute("href") === "index.html") ||
            (currentPage === "projects.html" && link.getAttribute("href") === "projects.html")) {
            link.classList.add("active");
        }
    });
});

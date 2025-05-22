document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (currentPage === link.getAttribute("href")) {
            link.classList.add("active");
        }
    });
});

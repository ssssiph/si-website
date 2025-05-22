document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();
    
    links.forEach(link => {
        link.classList.remove("active");
        
        if (currentPage === "" || currentPage === "index.html") {
            if (link.getAttribute("href") === "index.html") {
                link.classList.add("active");
            }
        }
        
        if (currentPage === "projects.html") {
            if (link.getAttribute("href") === "projects.html") {
                link.classList.add("active");
            }
        }
    });
});

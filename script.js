document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    let currentIndex = 1;

    function updateProjects() {
        projects.forEach((project, index) => {
            project.classList.remove("active");
            project.style.opacity = "0.5";

            if (index === currentIndex) {
                project.classList.add("active");
                project.style.opacity = "1";
            }
        });
    }

    document.querySelector("#left-arrow").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjects();
        }
    });

    document.querySelector("#right-arrow").addEventListener("click", () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateProjects();
        }
    });

    updateProjects();
});

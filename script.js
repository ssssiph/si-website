document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".projects-container");
    const leftArrow = document.querySelector("#left-arrow");
    const rightArrow = document.querySelector("#right-arrow");
    const projects = document.querySelectorAll(".project");

    let currentIndex = 1;
    const maxIndex = projects.length - 1;

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

    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateProjects();
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateProjects();
        }
    });

    updateProjects();
});

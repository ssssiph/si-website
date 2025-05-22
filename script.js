document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".projects-container");
    const leftArrow = document.querySelector("#left-arrow");
    const rightArrow = document.querySelector("#right-arrow");

    let scrollAmount = 0;
    const scrollStep = 300; // Длина прокрутки

    leftArrow.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        projectContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    rightArrow.addEventListener("click", () => {
        scrollAmount += scrollStep;
        projectContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

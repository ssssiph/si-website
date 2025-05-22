document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const container = document.querySelector(".projects-container");
  const wrapper = document.querySelector(".projects-wrapper");
  const leftArrow = document.querySelector("#left-arrow");
  const rightArrow = document.querySelector("#right-arrow");

  let currentIndex = 1; // Изначально активен второй элемент (Podcast)
  const maxIndex = projects.length - 1;

  function updateSlider() {
    // Обновляем классы и прозрачность для всех фреймов
    projects.forEach((project, index) => {
      project.classList.remove("active");
      project.style.opacity = "0.5";
      if (index === currentIndex) {
        project.classList.add("active");
        project.style.opacity = "1";
      }
    });

    // Центрируем активный фрейм в пределах обёртки
    const activeProject = document.querySelector(".project.active");
    const wrapperCenter = wrapper.offsetWidth / 2;
    const activeCenter = activeProject.offsetLeft + activeProject.offsetWidth / 2;
    const shift = wrapperCenter - activeCenter;
    container.style.transform = "translateX(" + shift + "px)";

    // Позиционируем стрелки относительно активного фрейма
    const activeRect = activeProject.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    leftArrow.style.left = (activeRect.left - wrapperRect.left - leftArrow.offsetWidth - 10) + "px";
    rightArrow.style.left = (activeRect.right - wrapperRect.left + 10) + "px";
  }

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);

  updateSlider();
});

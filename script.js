document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const container = document.querySelector(".projects-container");
  const wrapper = document.querySelector(".projects-wrapper");
  const leftArrow = document.querySelector("#left-arrow");
  const rightArrow = document.querySelector("#right-arrow");
  
  // Изначально активен средний фрейм (индекс 1)
  let currentIndex = 1;

  function updateSlider() {
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
    if (activeProject) {
      const wrapperCenter = wrapper.offsetWidth / 2;
      const activeCenter = activeProject.offsetLeft + activeProject.offsetWidth / 2;
      const shift = wrapperCenter - activeCenter;
      container.style.transform = "translateX(" + shift + "px)";
    }
  }

  leftArrow.addEventListener("click", () => {
    // Зацикливание: если на первом фрейме, переходим к последнему
    if (currentIndex <= 0) {
      currentIndex = projects.length - 1;
    } else {
      currentIndex--;
    }
    updateSlider();
  });

  rightArrow.addEventListener("click", () => {
    // Зацикливание: если на последнем фрейме, переходим к первому
    if (currentIndex >= projects.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
});

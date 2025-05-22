document.addEventListener("DOMContentLoaded", () => {
  // Обновляем активное состояние навигации
  function updateNavActive() {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (window.location.hash === "#projects") {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === "#projects") {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    } else {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "") {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }
  
  updateNavActive();
  window.addEventListener("hashchange", updateNavActive);

  // Слайдер проектов
  const projects = document.querySelectorAll(".project");
  const container = document.querySelector(".projects-container");
  const wrapper = document.querySelector(".projects-wrapper");
  const leftArrow = document.querySelector("#left-arrow");
  const rightArrow = document.querySelector("#right-arrow");
  
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
    
    const activeProject = document.querySelector(".project.active");
    if (activeProject) {
      const wrapperCenter = wrapper.offsetWidth / 2;
      const activeCenter = activeProject.offsetLeft + activeProject.offsetWidth / 2;
      const shift = wrapperCenter - activeCenter;
      container.style.transform = "translateX(" + shift + "px)";
    }
  }
  
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex <= 0) ? projects.length - 1 : currentIndex - 1;
    updateSlider();
  });
  
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex >= projects.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });
  
  window.addEventListener("resize", updateSlider);
  updateSlider();
});

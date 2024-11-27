
document.addEventListener("scroll", () => {
    const fadeInContent = document.querySelector(".fade-in-content");
    const elementPosition = fadeInContent.getBoundingClientRect().top; // Distance from top of viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) { // Trigger when 100px away from view
      fadeInContent.classList.add("visible");
    }
  });

document.addEventListener("scroll", () => {
    const slideInContent = document.querySelector(".slide-in-content");
    const elementPosition = slideInContent.getBoundingClientRect().top; // Element's distance from top of the viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) { // Trigger when 100px away from the viewport
      slideInContent.classList.add("visible");
    }
  });
  
  document.addEventListener("scroll", () => {
    const slideInContent = document.querySelector(".slide-in-content-2");
    const elementPosition = slideInContent.getBoundingClientRect().top; // Element's distance from top of the viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight- 100) { 
      slideInContent.classList.add("visible");
    }
  });
  
  document.addEventListener("scroll", () => {
    const slideInContent = document.querySelector(".slide-in-content3");
    const elementPosition = slideInContent.getBoundingClientRect().top; // Element's distance from top of the viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight- 100) { 
      slideInContent.classList.add("visible");
    }
  });
function checkVisibility1() {
    const fadeInContent = document.querySelector(".fade-in-content");
    const elementPosition = fadeInContent.getBoundingClientRect().top; // Distance from top of viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) {
      fadeInContent.classList.add("visible");
    }
  }
  document.addEventListener("DOMContentLoaded", checkVisibility1);

  document.addEventListener("scroll", checkVisibility1);

  function checkVisibility2() {
    const fadeInContent = document.querySelector(".slide-in-content");
    const elementPosition = fadeInContent.getBoundingClientRect().top; // Distance from top of viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) {
      fadeInContent.classList.add("visible");
    }
  }
  document.addEventListener("DOMContentLoaded", checkVisibility2);

  document.addEventListener("scroll", checkVisibility2);

  function checkVisibility3() {
    const fadeInContent = document.querySelector(".slide-in-content-2");
    const elementPosition = fadeInContent.getBoundingClientRect().top; // Distance from top of viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) {
      fadeInContent.classList.add("visible");
    }
  }
  document.addEventListener("DOMContentLoaded", checkVisibility3);

  document.addEventListener("scroll", checkVisibility3);

  
  function checkVisibility4() {
    const fadeInContent = document.querySelector(".slide-in-content3");
    const elementPosition = fadeInContent.getBoundingClientRect().top; // Distance from top of viewport
    const screenHeight = window.innerHeight;
  
    if (elementPosition < screenHeight - 100) {
      fadeInContent.classList.add("visible");
    }
  }
  document.addEventListener("DOMContentLoaded", checkVisibility4);

  document.addEventListener("scroll", checkVisibility4);
  

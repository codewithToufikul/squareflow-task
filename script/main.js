document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const topnavWrapper = document.querySelector(".topnav-wrapper");
  
    menuIcon.addEventListener("click", () => {
      topnavWrapper.classList.toggle("open");
    });
  });
  
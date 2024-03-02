// Get navigation elements
const navLinks = document.querySelector("anchor-menu"); 
const navButtons = document.querySelector("button-menu");

// Get hamburger menu elements 
const menu = document.querySelector(".hamburger-menu");
const menuButton = document.querySelector(".menu-button");

// Hide/show menu when clicking hamburger button
menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");  
});

// Hide nav elements on mobile screens
function toggleNav() {
  if (window.innerWidth < 768) { 
    navLinks.classList.add("hidden");
    navButtons.classList.add("hidden");
  } else {
    navLinks.classList.remove("hidden"); 
    navButtons.classList.remove("hidden");
  }
}

window.addEventListener("resize", toggleNav); 
toggleNav(); // Call on page load
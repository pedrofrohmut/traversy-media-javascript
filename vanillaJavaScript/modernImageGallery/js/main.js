// ELEMENTS
const currImg = document.querySelector("#current");
const imgs = Array.from(document.querySelectorAll(".imgs img"));

// CONSTANTS
const opacity = 0.4;

// SETUP
imgs[0].style.opacity = opacity;

// LISTENERS
imgs.forEach(img => img.addEventListener("click", e => imgClick(e)));

// Functions
const imgClick = function (e) {
    // Reset the opacity of all imgs
    imgs.forEach(img => img.style.opacity = 1);
    // Change current image src to clicked img src
    current.src = e.target.src;
    // Add fade in class
    current.classList.add("fade-in");
    // Remove fade-in class after 0.5s
    setTimeout(() => current.classList.remove("fade-in"), 500);
    // Changed the opacity to opacity var
    e.target.style.opacity = opacity;
}
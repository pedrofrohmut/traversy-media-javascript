const sliderImages = document.querySelectorAll(".slide")
const arrowLeft = document.getElementById("arrow-left")
const arrowRight = document.getElementById("arrow-right")

// State
let current = 0

// Clear all images
const reset = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none"
  }
}
// Initializes the slider
const startSlide = () => {
  reset()
  sliderImages[0].style.display = "block"
}
// Show Previous
const slideLeft = () => {
  reset()
  sliderImages[current - 1].style.display = "block"
  current--
}
// Show next
const slideRight = () => {
  reset()
  sliderImages[current + 1].style.display = "block"
  current++
}

startSlide()
// LISTENERS
arrowLeft.addEventListener("click", e => {
  if (current === 0) current = sliderImages.length
  slideLeft()
})
arrowRight.addEventListener("click", e => {
  if (current === sliderImages.length - 1) current = -1
  slideRight()
})

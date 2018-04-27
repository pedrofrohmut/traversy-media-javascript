// Get HTML Elements
const closeBtn     = document.getElementById('closeBtn')
const modal        = document.getElementById('simpleModal')
const modalContent = document.getElementById('modalContent')
const modalBtn     = document.getElementById('modalBtn')

// Listen for click to open the modal
closeBtn.addEventListener('click', (e) => closeModal())
// Listen for click to close the modal (button)
modalBtn.addEventListener('click', (e) => openModal())
// Listen for click to close the modal (window)
window.addEventListener('click', (e) => {
  // if (e.target === modal && e.target !== modalContent) closeModal()
  if (e.target === modal) closeModal()
})

// Function to close the modal
const closeModal = () => {
  modal.style.display = 'none'
}
// Function to show the modal
const openModal = () => {
  modal.style.display = 'block'
}

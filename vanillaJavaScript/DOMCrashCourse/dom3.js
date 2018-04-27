const button        = document.getElementById('button')
const output        = document.getElementById('output')
const box           = document.getElementById('box')
const itemInput     = document.querySelector('input[type="text"]')
const form          = document.querySelector('form')
const formInputs    = document.querySelectorAll('form input')
const btnDanger     = document.getElementById('btnDanger')
const select        = document.querySelector('select')

const buttonClicked = (e) => {
  // console.log(e.target)
  // console.log(e.target.id)
  // console.log(e.target.classList)
  document.getElementById('header-title').textContent = "Changed"
  document.querySelector('#main').style.backgroundColor = "#f4f4f4"
  output.innerHTML = '<h3>'+e.target.id+'</h3>'
  // MOUSE POSITIONS from the browser
  console.log("X:", e.clientX, ", Y:", e.clientY)
  // MOUSE POSITIONS from the element
  console.log("X:", e.offsetX, ", Y:", e.offsetY)
  // Ctrl, Shift, Alt are or not being pressed
  console.log(e.altKey)
  console.log(e.ctrlKey)
  console.log(e.shiftKey)
}
const runEvent = (e) => {
  console.log('EVENT TYPE: ' + e.type)
  // console.log(e.target.value)
}
const mousePosition = (e) => {
  output.innerHTML = '<h3><strong>MouseX:</strong> '+e.offsetX+', <strong>MouseY:</strong> '+e.offsetY+'</h3>'
  document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 40)'
}
const outputTyping = (e) => {
  output.innerHTML = `<h3>${e.target.value}</h3>`
}
const changeInputBGB = (e) => {
  console.log(e.target)
  // itemInput.style.backgroundColor = '#333'
  // itemInput.style.color = "#fff"
  e.target.style.backgroundColor = '#333'
  e.target.style.color = "#fff"
}
const changeBackInputBGB = (e) => {
  // itemInput.style.backgroundColor = '#fff'
  // itemInput.style.color = "#333"
  e.target.style.backgroundColor = '#fff'
  e.target.style.color = "#333"
}
//### EventListeners
button.addEventListener('click', buttonClicked)
//
button.addEventListener('click', runEvent)
button.addEventListener('dblclick', runEvent)
button.addEventListener('mousedown', runEvent)
button.addEventListener('mouseup', runEvent)
//
box.addEventListener('mouseenter', runEvent) // Only for the element
box.addEventListener('mouseover', runEvent) // for the element + children
//
box.addEventListener('mouseout', runEvent) // Only for the element
box.addEventListener('mouseleave', runEvent) // for the element + children
//
box.addEventListener('mousemove', mousePosition)
//
// itemInput.addEventListener('keydown', outputTyping)
// itemInput.addEventListener('keypress', outputTyping)
itemInput.addEventListener('keyup', outputTyping) // most usefull
// itemInput.addEventListener('input', outputTyping) // most usefull | everything you do
itemInput.addEventListener('select', runEvent)
itemInput.addEventListener('copy', runEvent)
itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)
//
// addEventListener('focus', changeInputBGB)
// addEventListener('blur', changeBackInputBGB)
Array.from(formInputs).forEach(input => {
    input.addEventListener('focus', changeInputBGB)
    input.addEventListener('blur', changeBackInputBGB)
})
//
btnDanger.addEventListener('click', e => document.body.style.display = 'none')
//
select.addEventListener('change', e => console.log(e.target.value))
//
form.addEventListener('submit', e => e.preventDefault())

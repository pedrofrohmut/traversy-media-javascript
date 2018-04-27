//#################################################################################### Traversing The D.O.M. ###
const itemList = document.querySelector('#items')
//#################################################################################### Parent Node ###
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = "#f3f3f3" // #main
console.log(itemList.parentNode.parentNode.parentNode) // body
//#################################################################################### Parent Element ###
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = "#f3f3f3" // #main
console.log(itemList.parentElement.parentElement.parentElement) // body
//#################################################################################### Child Node | Children ###
console.log(itemList.childNodes)
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = "yellow"
//#################################################################################### First Child | First Element Child | Last Child | Last Element Child ###
console.log(itemList.firstChild) // useless
console.log(itemList.firstElementChild)
console.log(itemList.lastChild) // useless
console.log(itemList.lastElementChild)
//#################################################################################### Siblings: next and previous ###
console.log(itemList.nextSibling) // useless
console.log(itemList.nextElementSibling)
console.log(itemList.previousSibling) // useless
console.log(itemList.previousElementSibling)
//#################################################################################### Create Element: div ###
let newDiv = document.createElement('div')
newDiv.className = "hello"
newDiv.id = "helloId"
newDiv.setAttribute('title', 'Hello Title')
newDiv.style.fontSize = "30px"
let newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)
let headerContainer = document.querySelector('header .container')
let headerH1 = document.querySelector('header h1')
console.log(newDiv)
headerContainer.insertBefore(newDiv, headerH1)

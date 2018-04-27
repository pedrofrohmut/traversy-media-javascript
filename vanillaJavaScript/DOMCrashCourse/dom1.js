//### EXAMINE THE DOCUMENT OBJECT ##############################################################################
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = '123'
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10]) // dont use index, they always change
document.all[10].textContent = "Hello World!"
console.log(document.forms[0])
console.log(document.links)
console.log(document.images)

//################################################################################### Get Element By ID
const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')
console.log(headerTitle)
headerTitle.textContent = "HELLO"
headerTitle.textContent += " and Goodbye"
console.log(headerTitle.textContent)
console.log(headerTitle.innerText)
headerTitle.innerHTML = `<h3>Hello</h3>`
header.style.borderBottom = '3px solid #333'
header.style.borderTop = '3px solid #333'

//################################################################################### Get ElementS By Class Name
var items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent = 'HELLO'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'
//### Gives an Error, You must interate the elements
// items.style.backgroundColor = "#333"
Array.from(items).forEach(item => item.style.backgroundColor = "#f2f2f2")

//################################################################################### Get ElementS By Tag Name
var lines = document.getElementsByTagName('li')
lines[3].style.backgroundColor = "#ccc"

//################################################################################### Query Selector
const mainHeader = document.querySelector('#main-header') // returns a Node
mainHeader.style.borderBottom = "5px solid red"

const input = document.querySelector('input') // returns a Node
input.value = "Hello World"
const submit = document.querySelector('input[type=submit]') // returns a Node
submit.value = "SEND"

const item = document.querySelector('.list-group-item') // returns a Node
item.style.color = "red"

const lastItem = document.querySelector('.list-group-item:last-child') // returns a Node
lastItem.style.color = "blue"

const secondItem = document.querySelector('.list-group-item:nth-child(2)') // returns a Node
secondItem.style.color = "coral"

//################################################################################### Query Selector All
const inputs = document.querySelectorAll('input') // returns a Node List
Array.from(inputs).forEach(input => input.value = "HELLO")

const oddLines = document.querySelectorAll('li:nth-child(odd)') // returns a Node List
Array.from(oddLines).forEach(line => line.style.backgroundColor = "lightblue")

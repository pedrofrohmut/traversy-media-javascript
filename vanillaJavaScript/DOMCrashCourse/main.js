const form            = document.getElementById('addForm')
const itemList        = document.getElementById('items')
const itemInput       = document.getElementById('itemInput')
const filter          = document.getElementById('filter')

//### Functions ################################################################
const addItem = () => {
  let item = itemInput.value
  // Create new li
  let li = document.createElement('li')
  // Add class
  li.classList.add('list-group-item')
  // Add text node with input value
  li.appendChild(document.createTextNode(item))
  // Create delete button element
  let deleteBtn = document.createElement('button')
  // Add classes to deleteBtn
  deleteBtn.classList.add('btn')
  deleteBtn.classList.add('btn-danger')
  deleteBtn.classList.add('btn-sm')
  deleteBtn.classList.add('float-right')
  deleteBtn.classList.add('delete')
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'))
  // Append the button to this line
  li.appendChild(deleteBtn)
  // Append this line to the items list
  itemList.appendChild(li)
}
const removeItem = (e) => {
  // console.log('teste: ', e.target.classList)
  // if (e.target.className == 'delete') console.log('delete')
  // if (Array.from(e.target.classList).includes('delete')) console.warn('delete')
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}
const filterItems = (e) => {
  const val = e.target.value.toLowerCase()
  let item = itemList.getElementsByTagName('li')
  Array.from(item).forEach(item => {
    const itemName = item.firstChild.textContent
    if (itemName.toLowerCase().indexOf(val) > -1) {
      item.style.display = 'block'
    }
    else {
      item.style.display = 'none'
    }
  })
}
//### Events ###################################################################
form.addEventListener('submit', e => {
  e.preventDefault()
  addItem()
})
itemList.addEventListener('click', e => removeItem(e))
filter.addEventListener('keyup', e => filterItems(e))

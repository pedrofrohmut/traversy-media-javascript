const deleteUser = (e) => {
  const confirmation = confirm('Are you sure?')
  if (confirmation) {
    $.ajax({
      type: 'DELETE',
      url: '/users/delete/' + $(this).data('id')
    }).done(response => {
      window.location.replace("/")
    })
    window.location.replace("/")
  } else {
    return false
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  const deleteUserBtns = document.querySelectorAll(".deleteUser")

  Array.from(deleteUserBtns).forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()
      deleteUser(e)
    })
  })
})

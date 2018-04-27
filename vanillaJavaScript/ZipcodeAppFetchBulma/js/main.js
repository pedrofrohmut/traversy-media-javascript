const form = document.querySelector("#zipForm")
const iconCheck = document.getElementById("iconCheck")
const iconRemove = document.getElementById("iconRemove")
const outputDiv = document.getElementById("output")
const zipInput = document.getElementById("zip")

const getLocationInfo = e => {
  // Get zip value from input
  const zipVal = zipInput.value
  // Make request
  fetch(`http://api.zippopotam.us/us/${zipVal}`)
    .then(response => {
      if (response.status !== 200) {
        outputDiv.innerHTML =
        ` <article class="message is-danger">
            <div class="message-body">Invalid Zipcode, please try again</div>
          </article>`
        showIcon("remove")
        throw Error(response.statusText)
      }
      else {
        showIcon("check")
        return response.json()
      }
    })
    .then(data => {
      // Show location info
      const output = data.places.reduce((output, place) => {
        const article =
         `<article class="message is-primary">
            <div class="message-header">
              <p>Location info</p>
              <button class="delete"></button>
            </div>
            <div class="message-body">
              <ul>
                <li><strong>City:</strong> ${place["place name"]}</li>
                <li><strong>State:</strong> ${place['state']}</li>
                <li><strong>Longitude:</strong> ${place['longitude']}</li>
                <li><strong>Latitude:</strong> ${place['latitude']}</li>
              </ul>
            </div>
          </article>`
        return output + article
      }, '')
      // Insert into output div
      outputDiv.innerHTML = output
    })
    .catch(err => console.warn(err))
  // Prevent the form submit
  e.preventDefault()
}
const showIcon = icon => {
  // Clear icons
  iconCheck.style.display = "none"
  iconRemove.style.display = "none"
  // Show correct icon or none
  if (icon === "check")  iconCheck.style.display  = "inline-flex"
  if (icon === "remove") iconRemove.style.display = "inline-flex"
}
const deleteLocation = e => {
  // Event BUBBLING  // Dont use e.target.className == "delete", easy to bug
  if (e.target.classList.contains("delete")) {
    const thisArticle = e.target.parentElement.parentElement
    thisArticle.remove()
    zipInput.value = ""
    showIcon("") // Show no Icons
  }
}

outputDiv.addEventListener("click", e => deleteLocation(e))
form.addEventListener("submit", e => getLocationInfo(e))

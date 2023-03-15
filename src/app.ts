const form = document.querySelector("form")!
const addressInput = document.getElementById("address")! as HTMLInputElement

const GOOGLE_API_KEY = "AIzaSyAE4mf-U-IfiaY-CXa7RX9Ud12qhhers1w"
const searchString =
  "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY"

function searchAddressHandler(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value

  // send to Google's API
}

form.addEventListener("submit", searchAddressHandler)

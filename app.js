let img = document.querySelector(".doggo");
let api = "https://dog.ceo/api/breeds/image/random";
let cont = document.querySelector(".doggo-container");

function fetchUrl() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    })
    .then((cont.style.display = "block"));
}

fetchUrl();

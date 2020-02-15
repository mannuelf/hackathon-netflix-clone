const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log('id', id)
const API_URL = `http://api.tvmaze.com/shows/${id}`;

fetch(API_URL)
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderPage(json);
  })
  .catch(error => {
    console.log(error);
  });


function renderPage(tvShow) {
  console.log(tvShow);
  let showTitle = document.querySelector(".title");
  let showDescription = document.querySelector(".subtitle");
  let showCoverImage = tvShow.image;

  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;

  getCoverPhoto(showCoverImage);
  addBackgroundImage(showCoverImage);
}

function getCoverPhoto(image) {
  let showCoverPhoto = document.querySelector(".cover-photo");
  showCoverPhoto.src = image.medium;
}

function addBackgroundImage(images) {
  console.log(images.original);
  let backgroundPhoto = document.querySelector(".background-photo");
  backgroundPhoto.style.backgroundImage = `url(${images.original})`;
}

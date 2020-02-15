const API_URL = `http://api.tvmaze.com/shows/1`;

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
  let showTitle = document.querySelector(".title");
  let showDescription = document.querySelector(".subtitle");
  let showCoverImage = tvShow.image;
  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;
  getCoverPhoto(showCoverImage);
  addBackgroundImage(showCoverImage);
}

function getCoverPhoto(images) {
  let showCoverPhoto = document.querySelector(".cover-photo");
  showCoverPhoto.src = images.medium;
}

function addBackgroundImage(images) {
  let backgroundPhoto = document.querySelector("body");
  backgroundPhoto.style.backgroundImage = images.medium;
}

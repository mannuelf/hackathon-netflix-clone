const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get(`id`);
const corsFix = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `http://api.tvmaze.com/shows/${id}`;
const API_EPISODES = `http://api.tvmaze.com/shows/${id}/episodes`;
const API_SEASONS = `http://api.tvmaze.com/shows/${id}/seasons`;
const loadingIcon = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

fetch(corsFix+API_URL)
  .then(response => response.json())
  .then(json => renderPage(json))
  .catch(error => console.log(error));

fetch(corsFix+API_EPISODES)
  .then(response => response.json())
  .then(json => renderEpisodes(json))
  .catch(error => console.log(error));

fetch(corsFix+API_SEASONS)
  .then(response => response.json())
  .then(json => renderSeasons(json))
  .catch(error => console.log(error));

function renderPage(tvShow) {
  const showTitle = document.querySelector(".title");
  const showDescription = document.querySelector(".subtitle");

  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;

  addBackgroundImage(tvShow.image);
}

function addBackgroundImage(images) {
  let backgroundPhoto = document.querySelector(".background-photo");
  backgroundPhoto.style.backgroundImage = `url(${images.original})`;
}

function renderEpisodes(episodes) {
  const episodeContainer = document.querySelector("#show-seasons .inner");
  episodes.forEach(episode => {
    episodeContainer.innerHTML += `<img src="${episode.image.medium}" alt="" class="show-season__image" >`;
  });
}

function renderSeasons(seasons) {
  const seasonsContainer = document.querySelector("#show-episodes .inner");
  seasons.forEach(season => {
    seasonsContainer.innerHTML += `<img src="${season.image.medium}" alt="" class="show-episode__image" >`;
  });
}

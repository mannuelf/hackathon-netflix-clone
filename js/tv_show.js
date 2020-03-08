const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get(`id`);
const corsFix = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `https://api.tvmaze.com/shows/${id}`;
const API_EPISODES = `https://api.tvmaze.com/shows/${id}/episodes`;
const API_SEASONS = `https://api.tvmaze.com/shows/${id}/seasons`;

const showTitle = document.querySelector(".title");
const showDescription = document.querySelector(".subtitle");
const backgroundPhoto = document.querySelector(".background-photo");
const episodeContainer = document.querySelector("#show-seasons .inner");
const seasonsContainer = document.querySelector("#show-episodes .inner");

fetch(API_URL)
  .then(response => response.json())
  .then(json => renderPage(json))
  .catch(error => console.log(error));

fetch(API_EPISODES)
  .then(response => response.json())
  .then(json => renderEpisodes(json))
  .catch(error => console.log(error));

fetch(API_SEASONS)
  .then(response => response.json())
  .then(json => renderSeasons(json))
  .catch(error => console.log(error));

function renderPage(tvShow) {
  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;
  renderHeroBannerPhoto(tvShow.image);
}

function renderHeroBannerPhoto(images) {
  backgroundPhoto.style.backgroundImage = `url(${images.original})`;
}

function renderEpisodes(episodes) {
  episodes.forEach(episode => {
    const coverPhoto = episode.image ? episode.image.medium : "https://placeimg.com/250/150/any";
    episodeContainer.innerHTML += `<img src="${coverPhoto}" alt="" class="show-season__image" >`;
  });
}

function renderSeasons(seasons) {
  seasons.forEach(season => {
    const coverPhoto = season.image ? season.image.medium : "https://placeimg.com/250/150/any";
    seasonsContainer.innerHTML += `<img src="${coverPhoto}" alt="" class="show-episode__image" >`;
  });
}

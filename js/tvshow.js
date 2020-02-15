const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
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
  let schedule = document.getElementById("schedule");

  let showCoverImage = tvShow.image;

  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;
  schedule.innerHTML = tvShow.schedule.time

  tvShow.schedule.days.forEach(value => {
    schedule.innerHTML += `<div> ${value}</div>`
  });

  getCoverPhoto(showCoverImage);
  addBackgroundImage(showCoverImage);
}

function getCoverPhoto(image) {
  let showCoverPhoto = document.querySelector(".cover-photo");
  showCoverPhoto.src = image.medium;
}

function addBackgroundImage(images) {
  let backgroundPhoto = document.querySelector(".background-photo");
  backgroundPhoto.style.backgroundImage = `url(${images.original})`;
}


// use add or remove classes here Cameron Was very lazy
document.getElementById('trigger').addEventListener('click', () => {
    let scheduleContent = document.getElementById('scheduleContent');
    if (scheduleContent.style.display === "none") {
      scheduleContent.style.display = "block";
    } else {
      scheduleContent.style.display = "none";
    }
})



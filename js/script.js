const BASE_URL = "http://api.tvmaze.com/shows";
let cachedMovieArray = [];
let contentContainer = document.getElementById('contentContainer');

function getResponse(response){
  return response.json()
}

function getJson(result) {
    cachedMovieArray = result;
    createCards(cachedMovieArray)
}

function showError(error) {
  console.log(error);
}

fetch(BASE_URL)
  .then(getResponse)
  .then(getJson)
  .catch(showError);

const createCards = (cards) => {
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].id);
    let img;

    (cards[i].image) ?
      img = cards[i].image.original :
      img = "https://www.chronicle.com/blogs/linguafranca/files/2017/11/Nothing-to-See-15a34a2fc727c8.jpg";

    contentContainer.innerHTML += `<div class="card">
          <div class="card-image">
            <figure class="image">
              <img src="${img}" alt="${cards[i].name}">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="${img}" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">${cards[i].name}</p>
                <p class="subtitle is-6">@${cards[i].name}</p>
              </div>
            </div>
            <div class="content">
              <a class="button is-dark" href="tvshow.html?id=${cards[i].id}">View More</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>`
  }
};


document.getElementById('search').addEventListener('click', function () {
  let filteredResults = cachedMovieArray.filter(value => {
    return value.name.toLowerCase() === document.getElementById('searchQuery').value.toLowerCase();
  });

  contentContainer.innerHTML = "";
  createCards(filteredResults);
});


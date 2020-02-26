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

    contentContainer.innerHTML +=
      `<div class="column is-one-quarter">
        <div class="card">
          <p class="title is-4">${cards[i].name}</p>
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${img}" alt="${cards[i].name}">
            </figure>
          </div>
          <div class="content">
            <br />
            <a class="button is-dark" href="tvshow.html?id=${cards[i].id}">View More</a>
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


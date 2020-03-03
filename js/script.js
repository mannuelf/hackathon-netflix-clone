const BASE_URL = "http://api.tvmaze.com/shows?page=1";
const contentContainer = document.getElementById('contentContainer');
const containerDiv = document.querySelector(".container");
const loadingIcon = document.querySelector(".loading-icon");
let cachedMovieArray = [];

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
    cards.forEach(card => {
      let img;
      (card.image) ?
        img = card.image.medium :
        img = "https://www.chronicle.com/blogs/linguafranca/files/2017/11/Nothing-to-See-15a34a2fc727c8.jpg";
      
      contentContainer.innerHTML += `
        <div class="column animate fadeIn">
          <div class="card">
              <div class="card-image">
                <div class="image is-4by3 thumbnail" style="background-image: url(${img});"></div>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="${img}" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${card.name}</p>
                    <p class="subtitle is-6">@${card.name}</p>
                  </div>
                </div>
                <div class="content">
                  <a class="button is-dark" href="tvshow.html?id=${card.id}">View More</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>`;
    });
    loadingIcon.classList.add("is-hidden-all");
};


document.getElementById('search').addEventListener('click', function () {
  let filteredResults = cachedMovieArray.filter(value => {
    return value.name.toLowerCase() === document.getElementById('searchQuery').value.toLowerCase();
  });

  contentContainer.innerHTML = "";
  createCards(filteredResults);
});


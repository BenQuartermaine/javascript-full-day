const list = document.querySelector('#results');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    // Template of your card being injected into the DOM
    const movie = `
      <div class="card-movie">
        <div class="image-top">
          <img height="100%" src="${result.Poster}" />
        </div>
        <div class="content">
          <p>${result.Year}</p>
          <h5>${result.Title}</h5>
        </div>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
  // Turn the response into JSON format
    .then(response => response.json())
  // Call the insertMovies function
    .then(insertMovies);
};

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  // Stop the submit event from reloading the page
  event.preventDefault();
  // This clears the HTML in the list before new cards are rendered
  list.innerHTML = '';
  // Grab the input
  const input = document.querySelector('#search-input');
  // Call the API, pass it the input
  fetchMovies(input.value);
});
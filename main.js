console.log(movieList)
const list = document.querySelector('#results');


// const renderMovies = (movies) => {
//   movies.forEach((movie) => {
//     const movieItem = `<div class="card">
//       <div class="bkg" style="background-image: url(${movie.image})"></div>
//       <p>${movie.title}</p>
//     </div>`;
//     list.insertAdjacentHTML('beforeend', movieItem);
//   });
// };

// API Call InsertMovies
const insertMovies = (data) => {
  console.log(data)
  data.Search.forEach((result) => {
    const movie = `<div class="card">
          <img class="bkg" src="${result.Poster}" />
          <p>${result.Title}</p>
      </div>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};


// API Call
const fetchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

// renderMovies(movieList)

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});
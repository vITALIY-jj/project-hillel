
import './style.scss';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const searchInput = document.querySelector('#searchInput');
const moviesContainer = document.querySelector('#movies');
const status = document.querySelector('#status');

async function searchMovies(query) {
  try {
    status.textContent = 'Loading...';
    moviesContainer.innerHTML = '';

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('HTTP Error ' + response.status);
    }

    const data = await response.json();

    if (data.Response === 'False') {
      status.textContent = data.Error;
      return;
    }

    status.textContent = `Found films: ${data.totalResults}`;

    renderMovies(data.Search);

  } catch (error) {
    console.error(error);
    status.textContent = 'Could not load films. Please try again later.';
  }
}

function renderMovies(movies) {
  moviesContainer.innerHTML = movies.map(movie => `
    <article class="movie-card">
      <img
        src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450?text=No+Poster'}"
        alt="${movie.Title}"
      >

      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <span>${movie.Type}</span>
      </div>
    </article>
  `).join('');
}

let timeout;

searchInput.addEventListener('input', (event) => {
  clearTimeout(timeout);

  const query = event.target.value.trim();

  if (query.length < 3) {
    moviesContainer.innerHTML = '';
    status.textContent = 'Minimum 3 characters';
    return;
  }

  timeout = setTimeout(() => {
    searchMovies(query);
  }, 400);
});

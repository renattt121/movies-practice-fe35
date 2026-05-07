import movies from "./data.js";
import { renderMovies } from "./render.js";
import { searchFilm } from "./search.js";
import { filterByGenre } from "./filteredByGenre.js";
import { sortedMovies } from "./sorted.js";
const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

//пошук фільмів
const inputSearchFilm = document.querySelector("[data-search]");
const handleSearchFilm = (event) => {
  const query = event.target.value.toLowerCase();
  const searchedFilm = searchFilm(query, movies);
  renderMovies(searchedFilm, moviesContainer);
};
inputSearchFilm.addEventListener("input", handleSearchFilm);

//фільтрація за жанром
const buttonFilterByGenre = document.querySelector("[data-filter]");
const handleFilter = (event) => {
  const currentUserGanre = event.target.dataset.ganre;

  const filteredFilms = filterByGenre(currentUserGanre, movies);
  renderMovies(filteredFilms, moviesContainer);
};
buttonFilterByGenre.addEventListener("click", handleFilter);
// сортування
const sortSelect = document.querySelector("[data-sort]");
const handleSort = (event) => {
  const query = event.target.value;
  const sortedFilms = sortedMovies(query, movies);
  renderMovies(sortedFilms, moviesContainer);
};
sortSelect.addEventListener("change", handleSort);

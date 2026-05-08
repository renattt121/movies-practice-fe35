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
  const currentUserGanre = event.target.selectedOptions[0].dataset.ganre; //тому що чендж только с масив працює

  const filteredFilms = filterByGenre(currentUserGanre, movies);
  renderMovies(filteredFilms, moviesContainer);
};
buttonFilterByGenre.addEventListener("change", handleFilter);
// сортування
const sortSelect = document.querySelector("[data-sort]");
const handleSort = (event) => {
  const query = event.target.value;
  const sortedFilms = sortedMovies(query, movies);
  renderMovies(sortedFilms, moviesContainer);
};
sortSelect.addEventListener("change", handleSort);

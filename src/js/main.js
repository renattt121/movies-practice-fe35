import movies from "./data.js";
import { renderMovies } from "./render.js";

const moviesContsiner = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

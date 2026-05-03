export const renderMovies = (movies, container) => {
  const movieMArkup = `<ul class ="movies-List">${movies
    .map(
      (film) => `    <ul class="movie-list">
            <li class="movie-item"></li>
            <acticle class="movie">
              <div class="movie-foto">
                <img src="${film.poster}" alt="${film.title}" class="movie-img" />
                </div>
                <div class="movie-info">
                  <h2 class="movie-title"> ${film.title}</h2>
                  <p class="movie-year">${film.year}</p>
                  <p class="movie-description">${film.description}</p>
                  <p class="movie-ganre">${film.genre.join(", ")}</p>
                  <p class="movie-rating">${film.rating}</p>
                </div>
            </acticle>
          </ul>`,
    )
    .join("")}<ul/>`;
  if (container) {
    container.innerHTML = movieMArkup;
  }
};

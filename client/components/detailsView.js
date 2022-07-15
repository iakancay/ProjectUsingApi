import { getBackdropPath, getImagePath } from "../../routes/getMovies.js";

export const createDetailElement = (movie) => {
  const movieDetails = document.createElement("div");
  const styleElement = document.createElement("style");
  document.head.appendChild(styleElement);
  styleElement.innerHTML = `.movie-details::before {background: url(${getBackdropPath(
    movie.backdrop_path
  )});background-size: cover}`;
  movieDetails.classList.add("movie-details");
  const genres = movie.genres.reduce(
    (acc, genre) => acc + genre.name + " ",
    " "
  );
  console.log(genres);
  movieDetails.innerHTML = `
<div class="poster">
            <img src=${getImagePath(movie.poster_path)} alt="" />
          </div>
          <div class="detail-info">
            <h2 class="title">
            ${movie.title} (${movie.release_date.slice(0, 4)})
            </h2>
            <p class="genres">${genres}</p>
            <p class="description">
              ${movie.overview}
            </p>
            <div class="cast">
              <h3 class="cast-head">Cast</h3>
              <div class="cast-list">
              </div>
`;
  return movieDetails;
};

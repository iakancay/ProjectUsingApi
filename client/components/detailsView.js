import { getBackdropPath, getImagePath } from "../../api/getMovies.js";

export const createDetailElement = (movie) => {
  const movieDetails = document.createElement("div");
  const styleElement = document.createElement("style");
  document.head.appendChild(styleElement);
  styleElement.innerHTML = `.movie-details::before {background: url(${getBackdropPath(
    movie.backdrop_path
  )});background-size: cover}`;
  movieDetails.classList.add("movie-details");
  const genres = movie.genres.map((genre) => genre.name);
  console.log(genres);
  movieDetails.innerHTML = `
<div class="poster">
            <img src=${getImagePath(movie.poster_path)} alt="" />
            <a data-bs-toggle="modal" data-bs-target="#trailer"><i class="fa-solid fa-circle-play fa-6x fa-bounce"></i></a> 
            
          </div>
          <div class="detail-info">
            <h2 class="title">
            ${movie.title} (${movie.release_date.slice(0, 4)})
            </h2>
            <h5 class="genres">${genres.join("-")}</h5>
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

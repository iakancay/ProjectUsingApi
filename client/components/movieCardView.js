import { showMovieDetail } from "../dashboard/movieDetailsPage.js";

export const createMovieCard = (movie) => {
  const movieListElement = document.querySelector(".movie-list");
  const card = document.createElement("div");
  card.classList.add("col");
  movieListElement.appendChild(card);
  card.innerHTML = `
  
          <div class="card movie-card ">
            <img
              src="${movie.poster}"
              class="card-img-top"
              alt="Movie Poster"
            />
            <div class="card-body">
              <h5 class="card-title text-dark">${movie.title}</h5>
              <p class="card-text">
                <small class="text-muted">${movie.releaseDate}</small>
              </p>
              <p class="card-text rounded-circle rating"><small>${Math.round(
                movie.rating * 10
              )}%</small></p>
            </div>
          </div>
    `;
  card.addEventListener("click", () => {
    showMovieDetail(movie.id);
  });
  return card;
};

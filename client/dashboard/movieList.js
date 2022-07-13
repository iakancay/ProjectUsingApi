import { getMovies } from "../../routes/getMovies.js";
import { createMovieCard } from "../components/movieCard.js";

export const initMovieList = async () => {
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = " ";
  const movieListElement = document.createElement("div");
  movieListElement.classList.add(
    "movie-list",
    "row",
    "row-cols-1",
    "row-cols-sm-3",
    "row-cols-lg-5",
    "g-5"
  );
  dashboard.appendChild(movieListElement);
  const movies = await getMovies("top_rated", 2);
  movies.forEach((movie) => {
    createMovieCard(movie.poster, movie.title, movie.rating, movie.releaseDate);
  });
};

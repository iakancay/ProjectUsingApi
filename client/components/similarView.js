import { getSimilarMovies } from "../../api/getSimilarMovies.js";
import { createMovieCard } from "./movieCardView.js";

export const createSimilarElement = async (movieId) => {
  const movies = await getSimilarMovies(movieId);
  const detailPage = document.querySelector(".detail-container");
  const element = document.createElement("div");
  element.classList.add(
    "similar-movies",
    "movie-list",
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-lg-5",
    "g-5"
  );
  detailPage.appendChild(element);
  movies.slice(0, 10).forEach((movie) => createMovieCard(movie));
  return element;
};

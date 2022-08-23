import { createMovieCard } from "./movieCardView.js";

export const createSimilarElement = (movies) => {
  const detailPage = document.querySelector(".detail-container");
  const element = document.createElement("div");
  element.classList.add(
    "similar-movies",
    "movie-list",
    "row",
    "row-cols-2",
    "row-cols-sm-3",
    "row-cols-lg-5",
    "g-3",
    "g-lg-5"
  );
  detailPage.appendChild(element);
  movies.slice(0, 10).forEach((movie) => createMovieCard(movie));
  return element;
};

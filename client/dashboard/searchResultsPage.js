import { getSearchMovies } from "../../api/getSearchedMovies.js";
import { createErrorElement } from "../components/errorView.js";
import { createMovieCard } from "../components/movieCardView.js";

export const showResults = () => {
  const input = document.querySelector("input");
  const searchButton = document.querySelector("#search");
  searchButton.addEventListener("click", async () => {
    if (!input.value) {
      createErrorElement("Please write something to search");
      return;
    }
    try {
      const movies = await getSearchMovies(input.value);
      if (movies.length === 0) {
        createErrorElement(`Sorry we couldn't find the movie: ${input.value}`);
      } else {
        const dashboard = document.querySelector("#dashboard");
        const movieListElement = document.createElement("div");
        movieListElement.classList.add(
          "movie-list",
          "row",
          "row-cols-2",
          "row-cols-sm-3",
          "row-cols-lg-5",
          "g-3",
          "g-lg-5"
        );
        dashboard.innerHTML = " ";
        dashboard.appendChild(movieListElement);
        movies.forEach((movie) => createMovieCard(movie));
      }
    } catch (err) {
      createErrorElement(err);
    }
  });
};

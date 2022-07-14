import { getMovies } from "../../routes/getMovies.js";
import { createMovieCard } from "../components/movieCard.js";

export const initMovieList = async () => {
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = " ";
  const movieListElement = document.createElement("div");
  const moreMovieButton = document.createElement("button");
  moreMovieButton.classList.add("btn", "btn-outline-danger");
  moreMovieButton.id = "more-movie";
  moreMovieButton.innerText = "More";
  let currentType;

  movieListElement.classList.add(
    "movie-list",
    "row",
    "row-cols-1",
    "row-cols-sm-3",
    "row-cols-lg-5",
    "g-5"
  );
  dashboard.appendChild(movieListElement);
  const navbarItems = document.querySelectorAll(".nav-item");

  navbarItems.forEach((item) => {
    item.addEventListener("click", async () => {
      item.classList.remove("active");
      item.classList.add("active");
      currentType = item.id;
      movieListElement.innerHTML = " ";
      const movies = await getMovies(currentType, 1);
      movies.forEach((movie) => {
        createMovieCard(
          movie.poster,
          movie.title,
          movie.rating,
          movie.releaseDate
        );
      });
      dashboard.appendChild(moreMovieButton);
    });
  });
  moreMovieButton.addEventListener("click", async () => {
    let page = 1;
    page++;
    const movies = await getMovies(currentType, page);
    movies.forEach((movie) => {
      createMovieCard(
        movie.poster,
        movie.title,
        movie.rating,
        movie.releaseDate
      );
    });
  });
  /*  const movies = await getMovies("top_rated", 2);
  movies.forEach((movie) => {
    createMovieCard(movie.poster, movie.title, movie.rating, movie.releaseDate);
  }); */
};

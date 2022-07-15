import { getMovies } from "../../routes/getMovies.js";
import { createMovieCard } from "../components/movieCardView.js";

export const showMovieList = async () => {
  const dashboard = document.querySelector("#dashboard");

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

  const navbarItems = document.querySelectorAll(".nav-item");

  navbarItems.forEach((item) => {
    item.addEventListener("click", async () => {
      item.classList.remove("active");
      item.classList.add("active");
      currentType = item.id;
      dashboard.innerHTML = " ";
      dashboard.appendChild(movieListElement);
      movieListElement.innerHTML = " ";
      const movies = await getMovies(currentType, 1);
      movies.forEach((movie) => createMovieCard(movie));
      dashboard.appendChild(moreMovieButton);
    });
  });
  moreMovieButton.addEventListener("click", async () => {
    let page = 1;
    page++;
    const movies = await getMovies(currentType, page);
    movies.forEach((movie) => createMovieCard(movie));
  });
  /*  const movies = await getMovies("top_rated", 2);
  movies.forEach((movie) => {
    createMovieCard(movie.poster, movie.title, movie.rating, movie.releaseDate);
  }); */
};

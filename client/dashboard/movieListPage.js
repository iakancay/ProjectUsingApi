import { getMovies } from "../../api/getMovies.js";
import { createMovieCard } from "../components/movieCardView.js";
import { showWelcomePage } from "./welcomePage.js";

export const showMovieList = async () => {
  showWelcomePage();
  const dashboard = document.querySelector("#dashboard");
  const movieListElement = document.createElement("div");
  const moreMovieButton = document.createElement("button");
  moreMovieButton.classList.add("btn", "btn-outline-danger", "float-end");
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
      document.body.style = "background-color:whitesmoke";
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
  let page = 1;
  moreMovieButton.addEventListener("click", async () => {
    page++;
    const movies = await getMovies(currentType, page);
    movies.forEach((movie) => createMovieCard(movie));
  });
};

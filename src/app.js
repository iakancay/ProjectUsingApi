import { showMovieList } from "./client/pages/movieListPage.js";
import { showResults } from "./client/pages/searchResultsPage.js";

const main = () => {
  showMovieList();
  showResults();
};

window.addEventListener("load", main);

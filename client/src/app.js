import { showMovieList } from "../dashboard/movieListPage.js";
import { showResults } from "../dashboard/searchResultsPage.js";

const main = () => {
  showMovieList();
  showResults();
};

window.addEventListener("load", main);

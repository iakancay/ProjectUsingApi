import { getMovies } from "../../routes/getMovies.js";
import { initMovieList } from "../dashboard/movieList.js";

const main = () => {
  initMovieList();
  //getMovies("top_rated", 2);
};

window.addEventListener("load", main);

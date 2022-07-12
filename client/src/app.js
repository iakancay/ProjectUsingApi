import { getMovies } from "../../routes/getMovies.js";

const main = () => {
  getMovies("top_rated", 2);
};

window.addEventListener("load", main);

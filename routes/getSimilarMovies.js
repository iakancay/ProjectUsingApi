import { API_KEY, BASE_URL } from "../client/src/constants.js";
import { getBackdropPath, getImagePath } from "./getMovies.js";

export const getSimilarMovies = async (movieId) => {
  const api = `${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(api);
  if (response.ok) {
    const { results } = await response.json();
    const similarMovies = results.map(
      ({
        id,
        title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
      }) => ({
        id,
        title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
      })
    );
    return similarMovies;
  }
  throw new Error("Response failed!");
};

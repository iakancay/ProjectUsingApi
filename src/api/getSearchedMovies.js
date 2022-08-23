import { API_KEY, BASE_URL } from "../constants.js";
import { getImagePath } from "./getMovies.js";

export const getSearchMovies = async (text) => {
  const api = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error("Response failed!");
  }
  const { results } = await response.json();
  const movies = results.map(
    ({ id, title, poster_path, vote_average, release_date }) => ({
      id,
      title,
      poster: `${
        poster_path
          ? getImagePath(poster_path)
          : "../client/assets/default_poster.jpeg"
      }`,
      rating: vote_average,
      releaseDate: release_date,
    })
  );
  return movies;
};

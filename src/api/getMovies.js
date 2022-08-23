import { API_KEY, BASE_URL, IMG_URL, YOUTUBE_URL } from "../constants.js";

export const getImagePath = (path) => `${IMG_URL}${path}`;

export const getVideoPath = (id) => `${YOUTUBE_URL}${id}`;

export const getMovies = async (type, page) => {
  const api = `${BASE_URL}movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
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

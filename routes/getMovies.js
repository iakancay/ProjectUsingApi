import { API_KEY, BASE_URL, GENRES } from "../client/src/constants.js";

export const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async (type, page) => {
  const api = `${BASE_URL}movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await fetch(api);
  if (response.ok) {
    const { results } = await response.json();
    const movies = results.map(
      ({
        id,
        title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        genre_ids,
      }) => ({
        id: String(id),
        title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genre_id) => GENRES[genre_id]),
      })
    );
    console.log(movies);
    return movies;
  }
  throw new Error("Response failed!");
};

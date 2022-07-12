import { API_KEY, BASE_URL } from "../client/src/constants.js";
import { getImagePath } from "./getMovies.js";

export const getMovieDetail = async (movie_id) => {
  const api = `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(api);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error("Response failed!");
};

export const getCast = async (movie_id) => {
  const api = `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`;
  const response = await fetch(api);
  if (response.ok) {
    const { cast } = await response.json();
    const result = cast.map(
      ({ id, original_name, profile_path, character }) => ({
        key: String(id),
        name: original_name,
        poster:
          profile_path !== null
            ? getImagePath(profile_path)
            : "https://www.shareicon.net/data/512x512/2016/09/01/822739_user_512x512.png",
        character,
      })
    );
    return result;
  }
  throw new Error("Response failed!");
};

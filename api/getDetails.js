import { API_KEY, BASE_URL } from "../client/src/constants.js";
import { getImagePath, getVideoPath } from "./getMovies.js";

export const getMovieDetail = async (movieId) => {
  const api = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(api);
  if (response.ok) {
    const result = await response.json();

    return result;
  }
  throw new Error("Response failed!");
};

export const getCast = async (movieId) => {
  const api = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(api);
  if (response.ok) {
    const { cast } = await response.json();
    const result = cast.map(({ original_name, profile_path, character }) => ({
      name: original_name,
      poster:
        profile_path !== null
          ? getImagePath(profile_path)
          : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?s=612x612",
      character,
    }));

    return result.slice(0, 5);
  }
  throw new Error("Response failed!");
};
export const getVideoUrl = async (movieId) => {
  const api = `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(api);
  if (response.ok) {
    const { results } = await response.json();
    const id = results[0].key;
    const videoUrl = getVideoPath(id);
    return videoUrl;
  }
  throw new Error("Response failed!");
};

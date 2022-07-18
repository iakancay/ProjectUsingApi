import { getCast, getMovieDetail, getVideoUrl } from "../../api/getDetails.js";
import { getSimilarMovies } from "../../api/getSimilarMovies.js";
import { createCastCard } from "../components/castView.js";
import { createDetailElement } from "../components/detailsView.js";
import { createSimilarElement } from "../components/similarView.js";
import { createTrailerModal } from "../components/trailerModalView.js";

export const showMovieDetail = async (movieId) => {
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = " ";
  const detailPage = document.createElement("div");
  detailPage.classList.add("detail-container");
  dashboard.appendChild(detailPage);

  const movie = await getMovieDetail(movieId);
  const movieDetailElement = createDetailElement(movie);
  detailPage.appendChild(movieDetailElement);

  const casts = await getCast(movieId);
  casts.forEach((cast) => createCastCard(cast));

  const similarMovies = await getSimilarMovies(movieId);
  createSimilarElement(similarMovies);

  const trailerUrl = await getVideoUrl(movieId);
  createTrailerModal(trailerUrl);

  // This is for after closing modal to stop video playing
  const modal = document.querySelector("#trailer");

  modal.addEventListener("show.bs.modal", () => {
    const frame = document.querySelector("#youtube-video");
    frame.setAttribute("src", url);
  });
  modal.addEventListener("hide.bs.modal", () => {
    const frame = document.querySelector("#youtube-video");
    frame.setAttribute("src", " ");
  });
};

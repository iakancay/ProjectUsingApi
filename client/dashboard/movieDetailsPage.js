import { getCast, getMovieDetail } from "../../routes/getDetails.js";
import { createCastCard } from "../components/castView.js";
import { createDetailElement } from "../components/detailsView.js";
import { createSimilarElement } from "../components/similarView.js";

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
  createSimilarElement(movieId);
};

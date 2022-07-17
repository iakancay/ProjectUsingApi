import { getVideoUrl } from "../../api/getDetails.js";

export const createTrailerModal = async (movieId) => {
  const movieDetail = document.querySelector(".movie-details");
  const trailerElement = document.createElement("div");
  trailerElement.classList.add("trailer-container");
  const url = await getVideoUrl(movieId);
  trailerElement.innerHTML = `
    <div class="modal fade" id="trailer" tabindex="-1" aria-labelledby="trailerLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <iframe id='youtube-video' src=${url} allowfullscreen></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `;
  movieDetail.appendChild(trailerElement);
};

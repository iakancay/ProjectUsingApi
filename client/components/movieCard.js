export const createMovieCard = (imgUrl, title, rate, date) => {
  const movieListElement = document.querySelector(".movie-list");
  const card = document.createElement("div");
  card.classList.add("col");
  movieListElement.appendChild(card);
  card.innerHTML = `
    
          <div class="card movie-card">
            <img
              src="${imgUrl}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-danger">${title}</h5>
              <p class="card-text">
                <small class="text-muted">${date}</small>
              </p>
              <p class="card-text rounded-circle rating"><small>${
                rate * 10
              }%</small></p>
            </div>
          </div>
    `;
  return card;
};

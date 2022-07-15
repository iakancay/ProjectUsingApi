export const createCastCard = (cast) => {
  const castList = document.querySelector(".cast-list");
  const element = document.createElement("div");
  element.classList.add("cast-card");
  castList.appendChild(element);
  element.innerHTML = `
  <div class="card" style="width: 9rem;">
  <img src=${cast.poster} class="card-img-top" alt="...">
  <div class="card-body">
  <p class="cast-name">${cast.name}</p>
 <p class="cast-role">(${cast.character})</p>
    
  </div>
</div>


`;
  return element;
};

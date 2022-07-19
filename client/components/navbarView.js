export const createNavbarElement = () => {
  const element = document.createElement("div");
  element.classList.add("container-xl");
  element.innerHTML = `
    <a class="navbar-brand" href="#">
      <img
        src="../assets/logo.png"
        alt="Logo"
        width="50"
        height="50"
        class="d-inline-block align-text-top"
      />
      CINEWORLD
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
        <li id="top_rated" class="nav-item">
          <a class="nav-link" href="#">Top Rated</a>
        </li>
        <li id="now_playing" class="nav-item">
          <a class="nav-link" href="#">Now Playing</a>
        </li>
        <li id="popular" class="nav-item">
          <a class="nav-link" href="#">Popular</a>
        </li>
        <li id="upcoming" class="nav-item">
          <a class="nav-link" href="#">Upcoming</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button id="search" class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
    `;
  return element;
};

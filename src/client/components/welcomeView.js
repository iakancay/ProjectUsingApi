export const createWelcomeElement = () => {
  const element = document.createElement("div");
  element.classList.add("welcome-container");
  element.innerHTML = `
    <img src="./client/assets/welcomegif.avif" alt="" />
    <div class="welcome-text">
      <h2>WELCOME to CINEWORLD!!!</h2>
      <h3>Millions of movie wait you to discover. Explore now.</h3>
    </div>
  </div>
    `;
  return element;
};

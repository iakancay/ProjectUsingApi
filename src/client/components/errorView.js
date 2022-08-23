export const createErrorElement = (message) => {
  const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = " ";
  const errorElement = document.createElement("div");
  errorElement.classList.add("error-container");
  errorElement.innerHTML = `
      <div class="alert alert-danger" role="alert">
  ${message}
</div>
    `;
  dashboard.appendChild(errorElement);
};

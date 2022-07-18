import { createWelcomeElement } from "../components/welcomeView.js";

export const showWelcomePage = () => {
  document.body.style = "background-color:black";
  const dashboard = document.querySelector("#dashboard");
  const welcomeElement = createWelcomeElement();
  dashboard.innerHTML = " ";
  dashboard.appendChild(welcomeElement);
};

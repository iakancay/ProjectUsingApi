import { createNavbarElement } from "../components/navbarView.js";
import { createWelcomeElement } from "../components/welcomeView.js";

export const showWelcomePage = () => {
  document.body.style = "background-color:black";
  const navbar = document.querySelector("nav");
  const navbarElement = createNavbarElement();
  navbar.appendChild(navbarElement);
  const dashboard = document.querySelector("#dashboard");
  const welcomeElement = createWelcomeElement();
  dashboard.innerHTML = " ";
  dashboard.appendChild(welcomeElement);
};

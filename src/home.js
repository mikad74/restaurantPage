import { component } from "./constructor.js";
import yakLogo from "./yakLogo.png";

function homePage() {
  const main = component("div", ["content-body"]);
  let elements = {};
  elements.title = component("div", ["content-title"]);
  elements.title.innerHTML = "Welcome to Yak Restaurant";

  elements.logo = component("div", ["logo-container"]);
  const pageLogo = component("img", [])
  pageLogo.src = yakLogo;
  elements.logo.appendChild(pageLogo)

  elements.slogan = component("div", ["slogan"]);
  elements.slogan.innerHTML = "The best ruminatables you will ever get."

  for (const element in elements) {
    main.appendChild(elements[element]);
  }

  return main;
}

export { homePage };

import { component } from "./constructor.js";

function menuPage() {
  const main = component("div", ["content-body"]);
  let elements = {};

  elements.title = component("div", ["content-title"]);
  elements.title.innerHTML = "Yak Menu";

  for (const element in elements) {
    main.appendChild(elements[element]);
  }

  return main
}

export { menuPage }

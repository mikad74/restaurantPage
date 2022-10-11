import { component } from "./constructor.js";

function contactPage() {
  const main = component("div", ["content-body"]);
  let elements = {};

  elements.title = component("div", ["content-title"]);
  elements.title.innerHTML = "Contact Info";

  for (const element in elements) {
    main.appendChild(elements[element]);
  }

  return main
}

export { contactPage }

import _ from "lodash";
import "./style.css";
import { component } from "./constructor.js";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

// Set up HTML page
function setupHTML() {
  console.log("setting up html");
  let elements = {};
  // Header
  elements.header = component("div", ["header"]);
  elements.header.innerHTML = "Yak Restaurant";

  // Menu Bar
  elements.menuBar = component("div", ["menu-bar"]);
  const home = component("button", ["home-button"]);
  home.innerHTML = "Home";
  const menu = component("button", ["menu-button"]);
  menu.innerHTML = "Menu";
  const contact = component("button", ["contact-button"]);
  contact.innerHTML = "Contact";
  elements.menuBar.appendChild(home);
  elements.menuBar.appendChild(menu);
  elements.menuBar.appendChild(contact);

  // Main Content Body
  elements.content = component("div", ["content"]);
  elements.content.appendChild(homePage());

  // Footer
  elements.footer = component("div", ["footer"]);
  for (const element in elements) {
    document.body.appendChild(elements[element]);
  }
}

function loadPage(page) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  content.appendChild(page);
}

function setupButtons() {
  const homeBtn = document.querySelector(".home-button");
  homeBtn.onclick = () => {
    loadPage(homePage());
  };
  const menuBtn = document.querySelector(".menu-button");
  menuBtn.onclick = () => {
    loadPage(menuPage());
  };
  console.log(menuBtn);
  const contactBtn = document.querySelector(".contact-button");
  contactBtn.onclick = () => {
    loadPage(contactPage());
  };
}

setupHTML();
setupButtons();

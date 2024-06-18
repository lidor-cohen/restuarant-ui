import "../styles/main.scss";
import "../styles/card.scss";
import "../styles/navbar.scss";
import "../styles/menupage.scss";
import { setupListeners } from "./animations";
import { HOMEPAGE_HTML, MENU_HTML } from "./pagesController";
const changingContentBody = document.querySelector("#content");

function load(html_str) {
  changingContentBody.innerHTML = html_str;
  eventBinders();
  setupListeners();
}

function eventBinders() {
  let menuButtons = document.querySelectorAll(".menuclick-button");
  let homeButtons = document.querySelectorAll(".homeclick-button");

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      load(MENU_HTML);
    });
  });

  homeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      load(HOMEPAGE_HTML);
    });
  });
}

load(HOMEPAGE_HTML);

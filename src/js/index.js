import "../styles/main.scss";
import "../styles/card.scss";
import "../styles/navbar.scss";
import "../styles/menupage.scss";
import { setupListeners } from "./animations";
import { HOMEPAGE_HTML } from "./pagesController";
const changingContentBody = document.querySelector("#content");
const menuButtons = document.querySelectorAll("menu-button");

function load(html_str) {
  changingContentBody.innerHTML = html_str;
  setupListeners();
}

load(HOMEPAGE_HTML);

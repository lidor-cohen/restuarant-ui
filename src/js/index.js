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

function scrollToDiv(divID) {
  console.log("ENTERED 2");
  let ele = document.getElementById(divID);
  window.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
}

function eventBinders() {
  let menuButtons = document.querySelectorAll(".menuclick-button");
  let homeButtons = document.querySelectorAll(".homeclick-button");
  let filterButtons = document.querySelectorAll(".filter-button");

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

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const divID = button.textContent.trim().toLowerCase() + "-section";
      scrollToDiv(divID);
    });
  });
}

// load(HOMEPAGE_HTML);

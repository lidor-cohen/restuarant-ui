let cardElements = document.querySelectorAll(".brightness-animate-element");
let regularButtons = document.querySelectorAll(".nav-regular-button");

// BRIGHTNESS ANIMATION
function startBrightnessAnimation() {
  this.classList.add("brightness-animating");
}

function stopBrightnessAnimation() {
  this.classList.remove("brightness-animating");
}

cardElements.forEach((element) => {
  element.addEventListener("mouseover", startBrightnessAnimation);
  element.addEventListener("mouseout", stopBrightnessAnimation);
});

// BUTTON HOVER ANIMATION
// 1. REGULAR BUTTON

function startRegularButtonAnimation() {
  this.classList.add("regular-button-animating");
}

function stopRegularButtonAnimation() {
  this.classList.remove("regular-button-animating");
}

regularButtons.forEach((element) => {
  element.addEventListener("mouseover", startRegularButtonAnimation);
  element.addEventListener("mouseout", stopRegularButtonAnimation);
});

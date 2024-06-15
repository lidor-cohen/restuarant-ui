let cardElements = document.querySelectorAll(".brightness-animate-element");

function startAnimation() {
  this.classList.add("brightness-animating");
}

function stopAnimation() {
  this.classList.remove("brightness-animating");
}

cardElements.forEach((element) => {
  element.addEventListener("mouseover", startAnimation);
  element.addEventListener("mouseout", stopAnimation);
});

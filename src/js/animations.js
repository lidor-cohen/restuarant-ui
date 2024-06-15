let cardElements = document.querySelectorAll(".animate-element");

function startAnimation() {
  this.classList.add("animating");
}

function stopAnimation() {
  this.classList.remove("animating");
}

cardElements.forEach((element) => {
  element.addEventListener("mouseover", startAnimation);
  element.addEventListener("mouseout", stopAnimation);
});

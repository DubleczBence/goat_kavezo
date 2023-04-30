let menu = document.getElementById("nav");

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);

function addTooltip(element, message) {
  element.setAttribute("title", message);
}

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek1-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek2-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek3-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek4-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek5-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek6-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek7-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek8-image");
  addTooltip(myImage, "Kattintson a képre!");
});

window.addEventListener("load", function() {
  const myImage = document.querySelector("#kavek9-image");
  addTooltip(myImage, "Kattintson a képre!");
});
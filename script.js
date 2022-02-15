`use strict`;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  randomBackground();
}

// sets the background to a random color
function randomBackground() {
  // receives no parameters.

  // Calls randomColor to get an rgb object
  let randomColorReturn = randomColor();

  // Calls rgbToCSSwith that object
  let rgbObject = rgbToCSS(randomColorReturn);

  // Uses the return value as value for body.style.backgroundColor, thus setting the background color to a random value.
  let bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = rgbObject;
}

// returns a random rgb color object
function randomColor() {
  // receives no parameters.

  // Creates three values, r, g, and b, as random(integers) between 0 and 255.
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // Returns those as an object}
  let rgbObj = { r, g, b };

  // converts a rgb color object into a CSS color string
  return rgbObj;
}

function rgbToCSS(rgb) {
  // receives an rgb object, with values for r, g, and b, e.g. {r: 192, g: 5, b: 42}

  // Creates a string like "rgb( 192, 5, 42  )" with the r, g, and b numbers
  let rgbReturn = randomColor();
  let rgbCSS = `rgb(${rgbReturn.r},${rgbReturn.g},${rgbReturn.b})`;
  //   console.log(rgbReturn);
  //   console.log(rgbCSS);

  // Returns that string
  return rgbCSS;
}

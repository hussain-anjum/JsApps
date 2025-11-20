// This projecet based on Async JS concepts like setInterval and clearInterval

const randomColor = function () {
  const hex = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // Generate a random index to pick a character from hex string
  }
  return color;
};
// console.log(randomColor());
let intervalId;

const colorChange = function () {
  document.querySelector("body").style.backgroundColor = randomColor();
};

const startColorChange = function () {
  if (intervalId == null) {
    intervalId = setInterval(colorChange, 1000);
  }
};

const stopColorChange = function () {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId to allow restarting the color change process
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);

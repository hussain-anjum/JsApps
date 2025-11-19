const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date(); // Create a new Date object to get the current time every second.
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval: This built-in function calls the provided function every specified number of milliseconds (1000 ms = 1 second) to update
// the clock display in real-time.
// toLocaleTimeString(): This method converts the Date object to a string representing the time portion according to the user's locale.

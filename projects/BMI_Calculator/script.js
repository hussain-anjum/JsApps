const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting and refreshing the page

  const height = parseInt(document.querySelector("#height").value); // parse height input as integer
  const weight = parseInt(document.querySelector("#weight").value); // parse weight input as integer
  const result = document.querySelector("#result"); // select the result display element to show BMI result

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid Height!`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid Weight!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>BMI = ${bmi} and you are Under Weight!</span>`; // use span for styling
    } else if (18.6 <= bmi && bmi <= 24.9) {
      result.innerHTML = `<span>BMI = ${bmi} and you have perfect BMI!</span>`;
    } else {
      result.innerHTML = `<span>BMI = ${bmi} and you are Over Weight!</span>`;
    }
  }
});

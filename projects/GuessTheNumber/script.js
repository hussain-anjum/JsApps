let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p"); // to use for Start new game button

let prevGuess = []; // to store previous guesses
let numGuess = 1;
let playGame = true; // to control game state

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); // get user input as integer
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      updateGameDisplay(guess);
      showMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      updateGameDisplay(guess);
      compareGuess(guess);
    }
  }
}

function compareGuess(guess) {
  if (guess === randomNumber) {
    showMessage(`Wooho! You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    showMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    showMessage(`Number is Too High`);
  }
}

function updateGameDisplay(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `; // display previous guesses using concatenation
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `; // update remaining guesses and display
}

function showMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); // disable input field when game ends
  p.classList.add("button"); // adding class into the <p> element for styling
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false; // set game state to false to prevent further inputs
  createNewGame();
}

function createNewGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    lowOrHi.innerHTML = "";
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}

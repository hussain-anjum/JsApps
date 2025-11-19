# Number Guessing Game

A fun and interactive web based number guessing game built with HTML, CSS, and JavaScript. Test your intuition by guessing a random number between 1 and 100 within 10 attempts.

## Features

- **Random Number Generation**: A new random number is generated each game between 1 and 100
- **Input Validation**: Ensures user input is a valid number within the acceptable range
- **Attempt Tracking**: Display previous guesses and remaining attempts
- **Interactive Feedback**: Real-time feedback on whether your guess is too high, too low, or correct
- **Game Reset**: Start a new game with a single click after finishing
- **Responsive Design**: Centered layout with a clean dark theme interface
- **Disabled Input**: Input field is automatically disabled when the game ends

## How to Play

1. Open `index.html` in your web browser
2. Read the instructions on the screen
3. Enter your guess (a number between 1 and 100) in the input field
4. Click the "Guess" button to submit your guess
5. Receive feedback on whether your number is too high, too low, or correct
6. You have **10 attempts** to find the correct number
7. After the game ends, click "Start new Game" to play again

## Project Structure

```
number-guessing-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Game Logic Flow

```
User Input → Validate Input → Check Against Random Number
                                    ↓
                    ┌───────────────┼───────────────┐
                    ↓               ↓               ↓
              Too Low         Correct!          Too High
              Display          End Game          Display
              Message          Message           Message
                    ↓               ↓               ↓
                Continue      Start New Game   Continue
```

**Enjoy the game and happy guessing! 🎮**

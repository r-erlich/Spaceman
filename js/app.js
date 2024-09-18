const display = document.querySelector(".textContainer");

const animals = [
  "dog",
  "cat",
  "fish",
  "bird",
  "elephant",
  "lion",
  "tiger",
  "zebra",
  "mouse",
  "rat",
  "snake",
];

const maxAttempts = 8;
let word = animals[Math.floor(Math.random() * animals.length)];
console.log(word);
let guessedLetters = [];
let gameBoard = [];
let attempts = 0;
let keys = document.querySelectorAll(".key");

// Set up game board
for (let i = 0; i < word.length; i++) {
  gameBoard.push(" _ ");
}

display.innerText = gameBoard.join("");

let handleClick = (event) => {
  console.log(event.target.textContent);
  console.log(word.toUpperCase().includes(event.target.textContent));
  if (word.toUpperCase().includes(event.target.textContent)) {
    // guess is correct
    // update the game board
    for (let i = 0; i < word.length; i++) {
      if (word[i].toUpperCase() === event.target.textContent) {
        gameBoard[i] = event.target.textContent;
      }
    }

    display.innerText = gameBoard.join("");
  } else {
    // guess is wrong
    // increase attempt count
    attempts++;
  }

  checkGameState();
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", handleClick);
}

function checkGameState() {
  if (attempts >= maxAttempts) {
    display.innerText = "you lose";
  } else if (!gameBoard.includes(" _ ")) {
    display.innerText = "you win";
  }
}

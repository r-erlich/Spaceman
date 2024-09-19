const display = document.querySelector(".textContainer");
const keys = document.querySelectorAll(".key");
const startBtn = document.querySelector("#start");
const headingElement = document.querySelector("h1");

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
  "gorilla",
  "monkey",
  "moose",
  "deer",
  "insect",
  "spider",
  "bear",
  "shark",
  "coral",
  "gazelle",
  "crocodile",
  "alligator",
  "caiman",
  "newt",
  "axolotl",
  "quokka",
  "squid",
  "owl",
  "falcon",
  "quail",
  "ox",
  "shrimp",
  "leopard",
  "cheetah",
];

const maxAttempts = 8;
let word;
let guessedLetters;
let gameBoard;
let attempts;
let wordAttemp;

function startGame() {
  word = animals[Math.floor(Math.random() * animals.length)];
  guessedLetters = [];
  gameBoard = [];
  attempts = 0;
  wordAttemp = "";
  // Set up game board
  for (let i = 0; i < word.length; i++) {
    gameBoard.push(" _ ");
  }

  display.innerText = gameBoard.join("");
}

startBtn.addEventListener("click", () => {
  startGame();
  headingElement.innerText = "";
});

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
    let spaceMan = "SPACEMAN";
    wordAttemp += spaceMan[attempts];
    headingElement.innerText = wordAttemp;

    attempts++;
  }

  checkGameState();
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", handleClick);
}

function checkGameState() {
  if (attempts >= maxAttempts) {
    display.innerHTML = `
      <p>I am so sorry, but you have lost. The SPACEMAN is complete</p>
      <button class="reset">Reset Game</button>
    `;

    document.querySelector(".reset").addEventListener("click", () => {
      startGame();
    });
  } else if (!gameBoard.includes(" _ ")) {
    display.innerHTML = `
      <p>You did it!</p>
      <button class="reset">Play Again</button>
    `;

    document.querySelector(".reset").addEventListener("click", () => {
      startGame();
    });
  }
}

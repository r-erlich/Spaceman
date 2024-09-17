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
let attempts = 0;
let keys = document.querySelectorAll(".key");

let handleClick = (event) => {
  console.log(event.target.textContent);
  console.log(word.toUpperCase().includes(event.target.textContent));
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", handleClick);
}

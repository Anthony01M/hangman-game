const words = ["javascript", "hangman", "coding", "programming", "developer", "algorithm", "function", "variable", "object", "array"];
let selectedWord = "";
let attemptsLeft = 6;
let guessedLetters = [];
let wordDisplay = [];

function startNewGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = 6;
    guessedLetters = [];
    wordDisplay = Array(selectedWord.length).fill("_");
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("word-display").innerText = wordDisplay.join(" ");
    document.getElementById("attempts-left").innerText = `Attempts left: ${attemptsLeft}`;
    document.getElementById("guessed-letters").innerText = `Guessed letters: ${guessedLetters.join(", ")}`;
}

function handleGuess() {
    const letter = document.getElementById("letter-input").value.toLowerCase();
    document.getElementById("letter-input").value = "";
    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (selectedWord.includes(letter)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === letter) {
                    wordDisplay[i] = letter;
                }
            }
        } else {
            attemptsLeft--;
        }
        checkGameStatus();
        updateDisplay();
    }
}

function checkGameStatus() {
    if (!wordDisplay.includes("_")) {
        alert("Congratulations! You've won!");
        startNewGame();
    } else if (attemptsLeft <= 0) {
        alert(`Game over! The word was: ${selectedWord}`);
        startNewGame();
    }
}

document.getElementById("guess-button").addEventListener("click", handleGuess);
document.getElementById("new-game-button").addEventListener("click", startNewGame);

startNewGame();

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});
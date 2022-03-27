const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "paper";
  }

  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults() {
  if (computerChoice === userChoice) {
    result = "Draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Lost";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "Win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Lost";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Lost";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "Win";
  }

  resultDisplay.innerHTML = result;
}

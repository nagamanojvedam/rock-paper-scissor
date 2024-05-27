"use strict";

const gameOptions = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

const gameOptionBtns = document.querySelectorAll(".game-options button");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultBtn = document.querySelector(".result-btn");

function randomChoiceGenerator() {
  return gameOptions[Math.round(Math.random() * 2)];
}

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice !== "rock")
    return computerChoice === "scissor" ? "You Win" : "Computer Wins";
  else if (playerChoice === "paper" && computerChoice !== "paper")
    return computerChoice === "rock" ? "You Win" : "Computer Wins";
  else if (playerChoice === "scissor" && computerChoice !== "scissor")
    return computerChoice === "paper" ? "You Win" : "Computer Wins";
  else return "Game Draw";
}

function updateScore(result) {
  if (result === "You Win") {
    playerScore++;
    playerScoreEl.innerText = playerScore;
    resultBtn.classList.remove("loose");
    resultBtn.classList.remove("draw");
    resultBtn.classList.add("win");
  }
  if (result === "Computer Wins") {
    computerScore++;
    computerScoreEl.innerText = computerScore;
    resultBtn.classList.remove("win");
    resultBtn.classList.remove("draw");
    resultBtn.classList.add("loose");
  }

  if (result === "Game Draw") {
    resultBtn.classList.remove("loose");
    resultBtn.classList.remove("win");
    resultBtn.classList.add("draw");
  }
}

function updateGame(playerChoice, computerChoice, result) {
  resultBtn.innerText = result;
  playerChoiceEl.innerText = playerChoice;
  computerChoiceEl.innerText = computerChoice;
}

gameOptionBtns.forEach((gameOptionBtn) =>
  gameOptionBtn.addEventListener("click", () => {
    const playerChoice = gameOptionBtn.id;
    const computerChoice = randomChoiceGenerator();

    const result = checkWinner(playerChoice, computerChoice);

    updateScore(result);
    updateGame(playerChoice, computerChoice, result);
  })
);

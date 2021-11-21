let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let roundsPlayed = 0;
const rounds = 5;

const playerHistoryList = document.querySelector(".player-history ul");
const computerHistoryList = document.querySelector(".computer-history ul");

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => button.addEventListener("click", playRound));

const playAgainButton = document.querySelector(".play-again-button");
playAgainButton.addEventListener("click", playAgain);

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const gameResult = document.querySelector(".game-result");
const gameEndMessage = document.querySelector(".game-end-message");


function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random()*choices.length)];
  return randomChoice;
}



function playRound(e) {

roundsPlayed++;  

const playerChoice = e.target.dataset.choice;
const computerSelection = computerPlay();

addItemToList(playerHistoryList, playerChoice);
addItemToList(computerHistoryList, computerSelection);

if (playerChoice === "rock") {
  if (computerSelection === "paper") {
    computerScore++;
    computer.innerText = computerScore.toString();
   
  } else if (computerSelection === "scissors") {
    playerScore++;
    player.innerText = playerScore.toString();
    
  }
}

if (playerChoice === "paper") {
  if (computerSelection === "scissors") {
    computerScore++;
    computer.innerText = computerScore.toString();
  } else if (computerSelection === "rock") {
    playerScore++;
    player.innerText = playerScore.toString();
  }
}

if (playerChoice === "scissors") {
  if (computerSelection === "rock") {
    computerScore++;
    computer.innerText = computerScore.toString();
    
  } else if (computerSelection === "paper") {
    playerScore++;
    player.innerText = playerScore.toString();
  }
}


if (playerScore == rounds || computerScore == rounds) {
  isGameOver = true;
}

if(isGameOver && playerScore == rounds) {
  gameResult.classList.add("won");
  buttons.forEach(button => button.disabled = true);
  gameEndMessage.innerText = "YOU WON!"
} else if(isGameOver && computerScore == rounds) {
  gameResult.classList.add("lost")
  buttons.forEach(button => button.disabled = true);
  gameEndMessage.innerText = "YOU LOST!"
}

}

function playAgain() {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  computer.innerText = "0";
  player.innerText = "0";
  buttons.forEach(button => button.disabled = false);
  gameResult.classList.remove("won");
  gameResult.classList.remove("lost");
     
  for (let i = roundsPlayed; i > 0; i--) {
    computerHistoryList.children[i].remove();
    playerHistoryList.children[i].remove();
  }

  roundsPlayed = 0;
}

function addItemToList(list, item) {
  let entry = document.createElement('li');
  entry.innerText = item;
  list.appendChild(entry);
}

console.log("------------Rock Paper Scissors------------");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random()*choices.length)];
  return randomChoice;
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => button.addEventListener("click", playRound));

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

function playRound(e) {

const playerChoice = e.target.dataset.choice;
console.log(playerChoice);
const computerSelection = computerPlay();
let result;


if (playerChoice === computerSelection) {
  result = "It's a tie!";
  return result;
} 

if (playerChoice === "rock") {
  if (computerSelection === "paper") {
    result = "You lose! Paper beats rock";
    computerScore++;
    computer.innerText = computerScore.toString();
    return result;
  } else if (computerSelection === "scissors") {
    result = "You win! Rock beats scissors";
    playerScore++;
    player.innerText = playerScore.toString();
    return result;
  }
}

if (playerChoice === "paper") {
  if (computerSelection === "scissors") {
    result = "You lose! Scissors beats paper";
    computerScore++;
    computer.innerText = computerScore.toString();
    return result;
  } else if (computerSelection === "rock") {
    result = "You win! Paper beats rock";
    playerScore++;
    player.innerText = playerScore.toString();
    return result;
  }
}

if (playerChoice === "scissors") {
  if (computerSelection === "rock") {
    result = "You lose! Rock beats scissors";
    computerScore++;
    computer.innerText = computerScore.toString();
    return result;
  } else if (computerSelection === "paper") {
    result = "You win! Scissors beats paper";
    playerScore++;
    player.innerText = playerScore.toString();
    return result;
  }
}

}

// for(let i = 0; i < 5; i++) {
//   const playerSelection = prompt(`Round ${i+1}/5 rock, paper, scissors?`);
//   const computerSelection = computerPlay();

//   console.log(`============ROUND ${i+1} / 5==================`);

//   console.log("You selected: " + playerSelection);
//   console.log("Computer selected: " + computerSelection);
  
//   console.log(playRound(playerSelection, computerSelection));
//   console.log("=========================================");
// }

console.log("Game completed.");
console.log("Results:");  
console.log("Your score: " + playerScore);
console.log("Computer score: " + computerScore);

if (playerScore === computerScore) {
  console.log("DRAW");
} else if (playerScore > computerScore) {
  console.log("VICTORY!");
} else {
  console.log("DEFEAT!");
}

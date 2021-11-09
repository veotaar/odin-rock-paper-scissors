console.log("------------Rock Paper Scissors------------");
console.log("call startGame() to start...");

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random()*choices.length)];
  return randomChoice;
}

function game() {

  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {

  let playerChoice = playerSelection.trim().toLowerCase();
  let result;

  if (playerChoice === computerSelection) {
    result = "It's a tie!";
    return result;
  } 

  if (playerChoice === "rock") {
    if (computerSelection === "paper") {
      result = "You lose! Paper beats rock";
      computerScore++;
      return result;
    } else if (computerSelection === "scissors") {
      result = "You win! Rock beats scissors";
      playerScore++;
      return result;
    }
  }

  if (playerChoice === "paper") {
    if (computerSelection === "scissors") {
      result = "You lose! Scissors beats paper";
      computerScore++;
      return result;
    } else if (computerSelection === "rock") {
      result = "You win! Paper beats rock";
      playerScore++;
      return result;
    }
  }

  if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats scissors";
      computerScore++;
      return result;
    } else if (computerSelection === "paper") {
      result = "You win! Scissors beats paper";
      playerScore++;
      return result;
    }
  }

  }

  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Round ${i+1}/5 rock, paper, scissors?`);
    const computerSelection = computerPlay();

    console.log(`============ROUND ${i+1} / 5==================`);

    console.log("You selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    
    console.log(playRound(playerSelection, computerSelection));
    console.log("=========================================");
  }

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

}

function startGame() {
  game();
}
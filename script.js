//Randomly selects the computer's choices
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
}

//Gets user input
function getHumanChoice() {
  return prompt("What is your choice?");
}

function playGame() {
  //Keeps track of the players score
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    if (!choices.includes(humanSelection)) {
      console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
      return;
    }
    if (humanSelection === computerSelection) {
      console.log(`It's a tie! Both chose ${humanSelection}`);
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    computerScore++;
  }

  //play 5 rounds
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}
// Start the game
playGame();

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

function playRound(playerSelection, computerSelection) {
  // Make the player's selection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Define the possible choices
  const choices = ['rock', 'paper', 'scissors'];

  // Check if the player's selection is valid
  if (!choices.includes(playerSelection)) {
      return "Invalid choice. Please choose rock, paper, or scissors.";
  }

  // Determine the winner of the round
  if (playerSelection === computerSelection) {
      return `It's a tie! Both chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
  } else {
      return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
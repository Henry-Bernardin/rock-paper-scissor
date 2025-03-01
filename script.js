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
let getHumanChoice = prompt("What is your choice?");

//Keeps track of the players score
let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  // Make the player's selection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Define the possible choices
  const choices = ["rock", "paper", "scissors"];

  // Check if the player's selection is valid
  if (!choices.includes(playerSelection)) {
    return "Invalid choice. Please choose rock, paper, or scissors.";
  }

  // Determine the winner of the round
  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*function that plays one round. Rock wins against scissors. Scissors wins against paper. Paper wins against rock.
function playRound(playerSelection, computerSelection) {
  switch ((playerSelection, computerSelection)) {
    case playerSelection === "rock" && computerSelection === "rock":
      console.log("Tie! Go again!");
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      console.log("You lose! Paper beats rock!");
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      console.log("You win! Rock beats scissors!");
      break;
    default:
    // code block
  }
} */

//button for rock
/*const rockButton = document.getElementById("rock"); 
rockButton.addEventListener("click", function(){
  playRound("rock", computerSelection); 
}); */

//div for score card
const scoreCard = document.getElementById("scoreDisplay");

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("rock", computerSelection);
  document.getElementById("scoreDisplay").innerHTML = result;
});

//button for paper
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("paper", computerSelection);
  document.getElementById("scoreDisplay").innerHTML = result;
});

//button for scissors
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const result = playRound("scissors", computerSelection);
  document.getElementById("scoreDisplay").innerHTML = result;
});

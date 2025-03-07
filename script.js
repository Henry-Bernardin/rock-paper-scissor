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
//Declaration of constant which holds getComputerChoice function
const computerSelection = getComputerChoice();

//Gets user input
function getHumanChoice() {
  return prompt("What is your choice?");
}

//Declaration of constant which holds getHumanChoice function
const humanSelection = getHumanChoice();

//Keeps track of the players score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  const choices = ["rock", "paper", "scissors"];
  if (!choices.includes(humanChoice)) {
    console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
    return;
  }
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  computerScore++;
}


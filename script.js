/* function which randomly selects rock paper or scissors this function uses a switch statement to select the choices*/
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

/*function that plays one round. Rock wins against scissors. Scissors wins against paper. Paper wins against rock.*/
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
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

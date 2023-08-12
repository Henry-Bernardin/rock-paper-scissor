
// function which randomly selects rock paper or scissors
// this function uses a switch statement to select the choices
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
        case 0:
         return 'Rock'
        case 1:
          return 'Scissors'
        case 2:
          return 'Paper'
      }
}

console.log(getComputerChoice()); 
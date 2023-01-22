let choices = ['Paper','Rock','Scissors'];
let rand = Math.floor(Math.random() * choices.length);
let shoot = choices[rand];

function getComputerChoice(){
    return shoot;
}
(getComputerChoice()

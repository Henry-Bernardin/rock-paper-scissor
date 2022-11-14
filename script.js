var choices = ['Paper','Rock','Scissors'];
var rand = Math.floor(Math.random() * choices.length);
var shoot = choices[rand];

function getComputerChoice(){
    return shoot;
}

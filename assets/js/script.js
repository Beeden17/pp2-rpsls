//Allow user to use enter key to be READY! from love maths project
document.getElementsByTagName("ready-button").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
        }

/**
 * Declare variables for DOM elements
 * Declare variables for player name
 * Declare variables for character selection for player
 * declare variables for computer character
 * declare variables for weapon selection
 */
let enterName = document.getElementById('entername');
let playerCharacter = document.getElementsByName('character-choice');
let computerCharacter = document.getElementsByName('character-choice') !== playerCharacter;
let playerWeapon = document.getElementsByClassName('weapons-div');
let computerWeapon = document.getElementsByClassName('weapons-div') !== playerWeapon;
let gameRound = document.getElementById('round-counter');
let playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let matchWinner = document.getElementById('the-winner-is');
let resetButton = document.getElementsByClassName('reset-button');

//Functions to use for game
function playerName(){

}

function runGame(){

}

//Generate computer player random
function computerChoice() {
        Math.floor(Math.random() * 5) + 1;
}
function checkWinner() {

}

function incrementScore() {

}

function incrementRound() {

}

function resetPositive() {

}

function youWin() {

}

function youLose() {

}
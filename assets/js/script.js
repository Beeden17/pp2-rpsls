//Allow user to use enter key to be READY! from love maths project
document.getElementsByTagName("ready-button").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        playerName();
        playerCharacter();
        computerCharacter();
        }

/**
 * Declare variables for DOM elements
 * Declare variables for player name
 * Declare variables for character selection for player
 * declare variables for computer character
 * declare variables for weapon selection
 */
var enterName = document.getElementById('entername');
let playerCharacter = document.getElementsByName('character-choice');
let computerCharacter = document.getElementsByName('character-choice') !== playerCharacter;
let playerWeapon = document.getElementsByClassName('weapons-div');
let computerWeapon = document.getElementsByClassName('weapons-div') !== playerWeapon;
const start = document.getElementsByClassName('get-ready-button');
var gameRound = document.getElementById('round-counter');
var playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let matchWinner = document.getElementById('the-winner-is');
const resetButton = document.getElementsByClassName('reset-button');

// Add event listener to ready to  play button

start.addEventListener("click", function () {
    if (this.getAttribute('username'));
    if (this.getAttribute('data-choice') === "submit");{
        playerName;
        playerIcon;
        computerIcon;

    }

// The main game loop
function runGame() {

}

// Function to add custom name to player zone
function playerName(){

}
// Adds chosen character as icon
function playerIcon(){

}
// Generate computer player random
function computerIcon() {
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
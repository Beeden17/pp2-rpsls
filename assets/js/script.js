/*
* Declare variables for DOM elements
* Declare variables for player name
* Declare variables for character selection for player
* declare variables for computer character
* declare variables for weapon selection
*/
var enterName = document.getElementById('entername');
var customPlayerName = document.getElementById('player-name-zone');
let playerCharacter = document.getElementsByName('character-choice');
let computerCharacter = document.getElementsByName('character-choice') !== playerCharacter;
let playerWeapon = document.getElementsByClassName('weapons-div');
let computerWeapon = document.getElementsByClassName('weapons-div') !== playerWeapon;
const start = document.getElementsByClassName('get-ready-button');
const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];
const iconChoices = ["astronaut", "dragon", "ghost"];
var gameRound = document.getElementById('round-number');
var playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let matchWinner = document.getElementById('the-winner-is');
const resetButton = document.getElementsByClassName('reset-button');

// Add event listener to ready to play button
start.addEventListener("click", function (event) {
    event.preventDefault();
    if (this.getAttribute('usersname') === true); {
        runGame();
    }
    //Allow user to use enter key to be READY! from love maths project
    document.getElementsByTagName("ready-button").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            runGame();
        }
    });
});
// The main game loop
function runGame() {
    //Creates empty space after answer is submitted, from love maths
    document.getElementById("entername").value = "";
    //Set curser to be already in the answer box, from love maths
    document.getElementById("entername").focus();
}

// Function to add custom name to player zone
function playerName() {
    enterName.getElementById("player-name-zone").value = customPlayerName;

}
// Adds chosen character as icon
function playerIcon() {

}
// Generate computer player random
function computerIcon() {
    Math.floor(Math.random() * 5) + 1;
}
function checkWinner() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function incrementRound() {

}

function resetPositive() {

}

function result() {

}
/*
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
const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];
const iconChoices = ["astronaut", "dragon", "ghost"];
var gameRound = document.getElementById('round-counter');
var playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let matchWinner = document.getElementById('the-winner-is');
const resetButton = document.getElementsByClassName('reset-button');

//Allow user to use enter key to be READY! from love maths project
document.getElementsByTagName("ready-button").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        playerName();
        playerCharacter();
        computerCharacter();
    }
});

// Add event listener to ready to play button
start.addEventListener("click", function (event) {
    event.preventDefault();
    if (this.getAttribute('usersname') === true); {
        runGame();
    }
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
    document.getElementById("player-name-zone").innerText = enterName;

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

function incrementScore() {

}

function incrementRound() {

}

function resetPositive() {

}

function result() {

}
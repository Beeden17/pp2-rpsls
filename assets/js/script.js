/*
* Declare variables for DOM elements
* Declare variables for player name
* Declare variables for character selection for player
* declare variables for computer character
* declare variables for weapon selection
*/
let enterName = document.getElementById('entername');
let customPlayerName = document.getElementById('player-name-zone');
let playerCharacter = document.getElementsByName('character-choice');
let computerCharacter = document.getElementsByName('character-choice') !== playerCharacter;
let weapons = document.getElementsByClassName('weapon');
const start = document.getElementById('get-ready-button');
const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];
const iconChoices = ["astronaut", "dragon", "ghost"];
var gameRound = document.getElementById('round-number');
var playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
let matchWinner = document.getElementById('the-winner-is');
const resetButton = document.getElementsByClassName('reset-button');

// Set curser to be already in the answer box, from love maths
document.getElementById("entername").focus();

// Event listener to add custom name to player zone
enterName.addEventListener('input', function () {
    const userInput = enterName.value;
    customPlayerName.textContent = `${userInput}`;
});

//Allow user to use enter key to be READY! from love maths project
start.addEventListener("keydown", function (event) {
    event.preventDefault;
    if (event.key === "Enter") {
        runGame(playerChooses);
    }
});

/**
 * // Add event listener to weapon buttons
for (let weapon of weapons) {
    weapon.addEventListener("click", function () {
        let playerChooses = this.getAttribute("data-choice");
    }
    runGame(playerChooses));
} 
} playerChooses 
 */

// The main game loop
function runGame(playerChooses) {
}

// Adds chosen character as icon
function playerIcon() {

}

// Add player weapon choice
function playerChooses() {

}

// Generate computer random weapon choice
function computerChooses() {

}

// Generate computer player random
function computerIcon() {

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
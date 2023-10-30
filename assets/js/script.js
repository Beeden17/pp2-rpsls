/*
* Declare variables for DOM elements
* Declare variables for player name
* Declare variables for character selection for player
* declare variables for computer character
* declare variables for weapon selection
*/
console.log('start');
let enterName = document.getElementById('usersname');
let customPlayerName = document.getElementById('player-name-zone');
let playerCharacter = document.getElementsByClassName('radio-buttons');
let computerCharacter = document.getElementsByClassName('radio-buttons');
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
document.getElementById("usersname").focus();

// Event listener to add custom name to player zone
enterName.addEventListener('input', function () {
    const userInput = enterName.value;
    customPlayerName.textContent = `${userInput}`;
});

//Allow user to use enter key to be READY! from love maths project
// start.addEventListener("keydown", function (event) {
//     event.preventDefault();
//     if (event.key === "Enter") {
//         runGame();

//     }
// });

// Click event listener
start.addEventListener("click", function (event) {
    event.preventDefault();
    // Grab user details
    console.log(event);
    runGame();
});

// Add event listener to weapon buttons
for (let weapon of weapons) {
    weapon.addEventListener("click", function () {
        if (this.getAttribute("data-choice") === 'submit');
        checkWinner();
    } else {
        runGame(enterName, playerCharacter);

    });

}

// The main game loop
function runGame(enterName, playerCharacter) {
    // add event listeners to game tiles
    // call function to tell user to select a tile, and set round number to 1
    // end rungame
    // user selects tile
    // function to capture what is selected
    // call random computer selection
    // capter computer selection
    // indicate to user the computer selection,
    // call function to see who won the hand
    // display who won game( seperate function)
    // function to count round winners, who won the match

}

// Adds chosen character as icon
function playerIcon() {

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
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
let customPlayerIcon = document.getElementById('user-chosen');
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

// // Event listener to add custom name to player zone
// enterName.addEventListener('input', function () {
//     const userInput = enterName.value;
//     customPlayerName.textContent = `${userInput}`;
// });

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
    // Validate user input here!!!
    // Grab user details
    let name = event.target.form[0].value;
    let playerIcon;
    if (event.target.form[1].checked) {
        playerIcon = 'astronaut';
    } else if (event.target.form[2].checked) {
        playerIcon = 'dragon';
    } else if (event.target.form[3].checked) {
        playerIcon = 'ghost';
    } else {
        playerIcon = 'astronaut';
    }
    console.log(event);
    runGame(name, playerIcon);
});

// Get the radio buttons by their class name
var playerCharacter = document.getElementsByClassName('radio-buttons');

// Get the span element
var resultPlayerSpan = document.getElementById("player-name-zone");

function updatePlayerDetails(name, playerIcon) {
    customPlayerName.innerText = name;
    if (playerIcon == 'astronaut') {
        customPlayerIcon.innerHTML = '<i class="fa-solid fa-user-astronaut"></i>';
    } else if (playerIcon == 'dragon') {
        customPlayerIcon.innerHTML = '<i class="fa-solid fa-dragon"></i>';
    } else if (playerIcon == 'ghost') {
        customPlayerIcon.innerHTML = '<i class="fa-solid fa-ghost"></i>';
    }
}
// The main game 'loop'
function runGame(name, playerIcon) {
    console.log('runGame');
    console.log(name);
    console.log(playerIcon);
    updatePlayerDetails(name, playerIcon);
    // Add event listener to weapon tiles
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
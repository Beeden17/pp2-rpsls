    //Allow user to use enter key to be READY!
    document.getElementsByTagName("ready-button").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }

/**
 * Declare variables for DOM elements
 * Declare variables for player name
 * Declare variables for character selection for player
 * declare variables for computer character
 * decalre variables for weapon selection
 */
let playerName = document.getElementById('entername');
let playerCharacter = document.getElementsByName('character-choice');
let computerCharacter = document.getElementsByName('character-choice') !== playerCharacter;


//Functions to use for game:

//
function playerName(){

}

function rungame(){

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
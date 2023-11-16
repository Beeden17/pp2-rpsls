// This ensures JavaScript code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    /* Declare variables*/
    let customPlayerName = document.getElementById('player-name-zone');
    let customPlayerIcon = document.getElementById('user-chosen-icon');
    let weapons = document.getElementsByClassName('weapon');
    const start = document.getElementById('get-ready-button');
    const weaponChoices = ["rock", "paper", "scissors", "lizard", "spock"];
    const iconChoices = ["astronaut", "dragon", "ghost"];
    var gameRound = document.getElementById('round-number');
    var playerScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');
    const resetButton = document.getElementById('reset-button');
    let displayComputerHand = document.getElementById('display-computer-weapon');
    let displayPlayerHand = document.getElementById('display-user-weapon');
    // Store round winner as global variable
    let winner = "";
    // Set curser to be already in the answer box, from love maths
    document.getElementById("usersname").focus();

    //Allow user to use enter key to be READY! from love maths project
    start.addEventListener("keydown", function (event) {
        event.preventDefault();
        if (event.key === "Enter") {
            runGame();

        }
    });

    // Click event listener
    start.addEventListener("click", function (event) {
        event.preventDefault();
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
        // Validate user input here!!!
        if (name.length >= 2 && name.length <= 10 && !/\s/.test(name)) {
            alert("You're all set. Click ok to play, Check the Game rules at the bottom of the page if you need, then select your first weapon!");
        } else {
            // Invalid player name, display an error message with instructions
            alert('Invalid player name! Please enter a name with 2 to 10 characters and no spaces.');
        }
        console.log(event);
        runGame(name, playerIcon);
    });

    // Generate computer Icon random
    function computerPlayerIcon() {
        const computerIconIndex = Math.floor(Math.random() * iconChoices.length);
        const computerIcon = iconChoices[computerIconIndex];

        let displayComputerIcon = document.getElementById('computer-chosen-icon');

        if (computerIcon === 'astronaut') {
            displayComputerIcon.innerHTML = '<i class="fa-solid fa-user-astronaut"></i>';
        } else if (computerIcon === 'dragon') {
            displayComputerIcon.innerHTML = '<i class="fa-solid fa-dragon"></i>';
        } else if (computerIcon === 'ghost') {
            displayComputerIcon.innerHTML = '<i class="fa-solid fa-ghost"></i>';
        }

        // Return the chosen computer icon
        return computerIcon;
    }

    // Get the player name and selected player character
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

    // Add event listener when the weapon tiles are selected, this will start the game
    function playerHandSelection(event) {
        console.log('playerHandSelection1');
        console.log(event);
        console.log(event.target.id);
        let playerHand = event.target.id;
        let compHand = computerHandSelection();
        removeGameEventListeners();

        roundWinner(playerHand, compHand);
    }
    function addGameEventListeners() {
        for (let weapon of weapons) {
            weapon.addEventListener('click', playerHandSelection);
        }
        matchWinner.innerText = 'Pick your hand';
    }
    function removeGameEventListeners() {
        for (let weapon of weapons) {
            weapon.removeEventListener('click', playerHandSelection);
        }
    }

    // Generate computer random weapon choice
    function computerHandSelection() {
        const computerHandSelectionIndex = Math.floor(Math.random() * weaponChoices.length);
        return weaponChoices[computerHandSelectionIndex];
    }

    // Check who has won the round
    function roundWinner(playerHandSelection, computerHandSelection) {
        // Display selected choices in game panel
        displayPlayerHand.innerHTML = `${playerHandSelection}`;
        displayComputerHand.innerHTML = `${computerHandSelection}`;
        if (playerHandSelection === computerHandSelection) {
            // no increment in score
            incrementRound();
            matchWinner.innerText = "It's a Draw, try again!";
            setTimeout(function () {
                // add time delay
                addGameEventListeners();
            }, 2000);
        } else if (
            (playerHandSelection === "rock" && (computerHandSelection === "scissors" || computerHandSelection === "lizard")) ||
            (playerHandSelection === "paper" && (computerHandSelection === "rock" || computerHandSelection === "spock")) ||
            (playerHandSelection === "scissors" && (computerHandSelection === "paper" || computerHandSelection === "lizard")) ||
            (playerHandSelection === "lizard" && (computerHandSelection === "spock" || computerHandSelection === "paper")) ||
            (playerHandSelection === "spock" && (computerHandSelection === "rock" || computerHandSelection === "scissors"))
        ) {
            incrementPlayerScore();
            // increment round
            incrementRound();
            // add you win round message
            matchWinner.innerText = "You win this round, Well done!";
            setTimeout(function () {
                // add time delay
                let winner = checkWinner();
                if (winner) {
                    matchWinner.innerText = "Congratulations! You win the match! Press RESET SCORES! to start again";
                } else {
                    addGameEventListeners();
                }
            }, 2000);
        } else {
            incrementComputerScore();
            incrementRound();
            // add you lose round message
            matchWinner.innerText = "You lose this round, try again!";
            setTimeout(function () {
                // add time delay
                let winner = checkWinner();
                if (winner) {
                    matchWinner.innerText = "Computer wins the match. Better luck next time! Press RESET SCORES! to start again";
                } else {
                    addGameEventListeners();
                }
            }, 2000);
        }
    }

    // Start the game
    function runGame(name, playerIcon) {
        // Update player details and computer's icon
        updatePlayerDetails(name, playerIcon);
        computerPlayerIcon();
        addGameEventListeners();
    }

    // MatchWinner variable to prompt use and display winner
    let matchWinner = document.getElementById("the-winner-is");

    function checkWinner() {
        let playerScoreValue = parseInt(playerScore.innerText);
        let computerScoreValue = parseInt(computerScore.innerText);

        if (playerScoreValue >= 3 || computerScoreValue >= 3) {
            return true;
        }
        return false;
    }

    function incrementPlayerScore() {
        let currentScore = parseInt(playerScore.innerText);
        let incrementedScore = currentScore + 1;
        playerScore.innerText = incrementedScore;
        console.log(incrementedScore);
    }

    function incrementComputerScore() {
        let currentScore = parseInt(computerScore.innerText);
        computerScore.innerText = currentScore + 1;
    }

    function incrementRound() {
        let currentRound = parseInt(gameRound.innerText);
        gameRound.innerText = currentRound + 1;
    }

    // Add event listener to reset button
    resetButton.addEventListener('click', resetPositive);

    // resets the game when reset button is clicked
    function resetPositive() {
        playerScore.innerText = "0";
        computerScore.innerText = "0";
        gameRound.innerText = "0";
        displayPlayerHand.innerText = '';
        displayComputerHand.innerText = '';
        matchWinner.innerText = "THE WINNER IS FIRST TO SCORE 3!";
        setTimeout(function () {
            addGameEventListeners();
        }, 2000);
    }
});
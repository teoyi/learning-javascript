// Backend for rock paper scissors game

// Randomizing computer's hand 
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return result = choice[random]
}

// Game Logic 
function playRound(playerSelection, computerSelection) { 
    
    console.log(`You played: ${playerSelection}`);
    console.log(`The computer played: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper!"
    }
}

// Actual Game 
function game() {
    for (let step = 0; step < 5; step++){

        // Setting variables of player's and computer's hand
        let computerSelection = computerPlay();
        let playerSelection = prompt("What hand would you like to play?");
        playerSelection = playerSelection.toLowerCase();

        let valid = false;
        while (!valid) {
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                valid = true; 
            } else {
                playerSelection = prompt("Sorry, that is not an option! Please choose from rock, paper or scissors!");
            }
        }
        console.log(playerSelection);
        //Displaying results 
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
// Backend for rock paper scissors game //
//////////////////////////////////////////

// Randomizing computer's hand 
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return result = choice[random]
}

// Game Logic 
function playRound(playerSelection, computerSelection) { 
    
    if (playerSelection === computerSelection) {
        return "It's a Tie!";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors!";
  
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper!";
    
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors";
   
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock!";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper!";

    };
};
//for (let step=0; step < 5; step++) {

// Introducing scores 
let currentpscore = 0;
let currentcscore = 0;
const total = currentpscore + currentcscore;

// Reset function 
function reset() {
    currentpscore = 0, currentcscore = 0;
    document.getElementById("pscore").innerHTML = currentpscore;
    document.getElementById("cscore").innerHTML = currentcscore;
    document.getElementById("results").innerHTML = ""; 
}

// Adding DOM element 
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        console.log(playerSelection);
        let computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);

        // Embedding results into numerical value 
        if (results === "It\'s a Tie!") {
            currentpscore+0;
        } else if (results[4] === "W") {
            currentpscore++;
        } else if (results[4] === "L") {
            currentcscore++;
        }
        console.log(currentpscore);
        console.log(currentcscore);
        console.log(currentpscore + currentcscore);
        
        // Replacing HTML element to display score & results 
        document.getElementById("pscore").innerHTML = currentpscore;
        document.getElementById("cscore").innerHTML = currentcscore;
        document.getElementById("results").innerHTML = results; 

        // Reset conditions
        if (currentpscore + currentcscore === 5) {
            if (currentpscore === currentcscore) {
                alert("It\'s a draw!!");
                reset();
            } else if (currentcscore > currentpscore) {
                alert("You Lose!")
                reset();
            } else {
                alert("You Win!")
                reset();
            }
        }
    })
})





//     //for (let step = 0; step < 5; step++){
    



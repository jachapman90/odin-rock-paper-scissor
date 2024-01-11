let winCount = 0;
let lossCount = 0;

let playerChoice = "";
let computerChoice = "";

function playGame() {
playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

playerChoice = getPlayerChoice();
computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

}

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, Scissors?");
    return(playerInput.toLowerCase());
}

function playRound(p1, p2) {
    if (playerChoice === computerChoice) {
        console.log(p1);
        console.log(p2);
        console.log("Tie, Play Again!");
    } else if ((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
        console.log(p1);
        console.log(p2);
        lossCount++;
        console.log("You Lose!");
    } else {
        console.log(p1);
        console.log(p2);
        winCount++;
        console.log("You Win!");
    }

    console.log("You: " + winCount);
    console.log("Computer: " + lossCount);

    if (winCount >= 3) {
        winCount = 0;
        lossCount = 0;
        return(alert("You Win The Game!"));
    } else if (lossCount >= 3) {
        winCount = 0;
        lossCount = 0;
        return(alert("You Lose The Game!"));
    }
  }



function getComputerChoice() {
    let outputChoice;
    let computerInput = (Math.floor(Math.random() * 10)) % 3;
    if (computerInput === 0) {
        outputChoice = "rock";
    }
    else if (computerInput === 1) {
        outputChoice = "paper";
    }
    else {outputChoice = "scissors";
    }
    return(outputChoice);
} 







const btn = document.querySelector('button');
const div = document.querySelector('#rps');
const score = document.querySelector('#score');
const losses = document.querySelector('#losses');
const wins = document.querySelector('#wins');


let winCount = 0;
let lossCount = 0;
let gameCount = 0;
let winner;

let playerChoice = "";
let computerChoice = "";

div.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playerChoice = "rock";
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
            break;
        case 'paper':
            playerChoice = "paper";
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
            break;
        case 'scissors':
            playerChoice = "scissors";
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
            break;
    };
});

function playGame() {
    while (gameCount < 5) {
//    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    scoreCount();
    };
    console.log("You: " + winCount);
    console.log("Computer: " + lossCount);
    if (gameCount === 5 && winCount > lossCount) {
        (alert("You won" + "\n" + winCount + "/5 rounds." + "\n" + 
        "You Win The Game!"));
        winCount = 0;
        lossCount = 0;
        gameCount = 0;
    } else if (gameCount === 5 && winCount < lossCount) {
        (alert("You won" + "\n" + winCount + "/5 rounds." + "\n" + 
        "You Lost The Game!"));
        winCount = 0;
        lossCount = 0;
        gameCount = 0;
    };
};

function scoreCount() {
    if (winner === "comp") {
        lossCount++;
        gameCount++;
        losses.textContent = `Losses: ${lossCount}`;
        winner = "";
        console.log(gameCount);
    } else if (winner === "player") {
        winCount++;
        gameCount++;
        wins.textContent = `Wins: ${winCount}`;
        winner = "";
        console.log(gameCount);
    };
};

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, Scissors?");
    return(playerInput.toLowerCase());
};

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
        winner = "comp";
        console.log("You Lose!");
        scoreCount();
        return(winner);
    } else {
        console.log(p1);
        console.log(p2);
        winner = "player";
        console.log("You Win!");
        scoreCount();
        return(winner);
    };

};



function getComputerChoice() {
    let outputChoice;
    let computerInput = (Math.floor(Math.random() * 10)) % 3;
    if (computerInput === 0) {
        outputChoice = "rock";
    } else if (computerInput === 1) {
        outputChoice = "paper";
    } else {outputChoice = "scissors";
    }
    return(outputChoice);
};

//playGame();





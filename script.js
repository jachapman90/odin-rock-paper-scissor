
const btn = document.querySelector('button');
const div = document.querySelector('#rps');
const score = document.querySelector('#score');
const losses = document.querySelector('#losses');
const wins = document.querySelector('#wins');
const round = document.querySelector('#round');
const playerHand= document.querySelector('#playerHand');
const compHand = document.querySelector('#compHand');

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

function scoreCount() {
    if (winner === "comp") {
        lossCount++;
        gameCount++;
        losses.textContent = `Losses: ${lossCount}`;
        round.textContent = `Round: ${gameCount}`;
        winner = "";
    } else if (winner === "player") {
        winCount++;
        gameCount++;
        wins.textContent = `Wins: ${winCount}`;
        round.textContent = `Round: ${gameCount}`;
        winner = "";
    };
};

function winCon() {
    if (winCount === 5) {
        (alert("You won" + "\n" + winCount + "/5 rounds." + "\n" + 
        "You Win The Game!"));
        winCount = 0;
        lossCount = 0;
        gameCount = 0;
    } else if (lossCount === 5) {
        (alert("You won" + "\n" + winCount + "/5 rounds." + "\n" + 
        "You Lost The Game!"));
        winCount = 0;
        lossCount = 0;
        gameCount = 0;
    };
};

function playRound(p1, p2) {
    if (playerChoice === computerChoice) {
        console.log("Tie, Play Again!");
    } else if ((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
        winner = "comp";
        console.log("You Lose!");
    } else {
        winner = "player";
        console.log("You Win!");
    };
    showHands()
    scoreCount();
    winCon();
};

function showHands() {
    playerHand.textContent = `You played: ${playerChoice}`;
    compHand.textContent = `Computer played: ${computerChoice}`;
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






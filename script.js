
const btn = document.querySelector('button');
const div = document.querySelector('#rps');
const score = document.querySelector('#score');
const losses = document.querySelector('#losses');
const wins = document.querySelector('#wins');
const round = document.querySelector('#round');
const playerHand= document.querySelector('#playerHand');
const compHand = document.querySelector('#compHand');
let image = document.querySelectorAll('.hands');
let compImg = document.querySelector('#comp img');

let winCount = 0;
let lossCount = 0;
let gameCount = 0;
let winner;
let playerChoice = "";
let computerChoice = "";
let imgSrc = "noun-question-mark-1177353.svg";
let imgSrc2 = "noun-question-mark-1177353.svg";
let imgAlt = 'Question mark icon';
let imgAlt2 = 'Question mark icon';

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
    changePlayerIcon(playerChoice, computerChoice);
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

function changeCompIcon() {
    if (computerChoice === "rock") {
        compImg.src = "./img/noun-fire-1678030.svg";
        compImg.alt = "The element of fire";
    }
};


let altF = "The element of fire.";
let altE = "The element of earth.";
let altW = "The element of water.";
let imgF = "noun-fire-1678030.svg";
let imgE = "noun-leaf-6495226.svg";
let imgW = "noun-water-1296735.svg";

function changePlayerIcon(p1, p2) {
        let image = document.querySelectorAll("img")[0];
        if (p1 === "rock") {
            let source = image.src = image.src.replace(
            imgSrc, imgF);
            imgSrc = imgF;
            let alt = image.alt = image.alt.replace(imgAlt, 
            altF);
            imgAlt = altF;
        } else if (p1 === "scissors") {
            let source = image.src = image.src.replace(
                imgSrc, imgE);
                imgSrc = imgE;
            let alt = image.alt = image.alt.replace(imgAlt, 
         altE);
            imgAlt = altE;
     } else {
            let source = image.src = image.src.replace(
                imgSrc, imgW);
                imgSrc = imgW;
            let alt = image.alt = image.alt.replace(imgAlt, 
            altW)
                imgAlt = altW;
            }

        let image2 = document.querySelectorAll("img")[1];
        if (p2 === "rock") {
            let source = image2.src = image2.src.replace(
            imgSrc2, imgF);
            imgSrc2 = imgF;
            let alt = image2.alt = image2.alt.replace(imgAlt, 
            altF);
            imgAlt2 = altF;
        } else if (p2 === "scissors") {
            let source = image2.src = image2.src.replace(
                imgSrc2, imgE);
                imgSrc2 = imgE;
            let alt = image2.alt = image2.alt.replace(imgAlt, 
         altE);
            imgAlt2 = altE;
     } else {
            let source = image2.src = image2.src.replace(
                imgSrc2, imgW);
                imgSrc2 = imgW;
            let alt = image2.alt = image2.alt.replace(imgAlt, 
            altW)
                imgAlt2 = altW;
     }};








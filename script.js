const choice = getComputerChoice;

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 10)) % 3;
    if (computerChoice == 0) {
        computerChoice = "Rock";
    }
    else if (computerChoice == 1) {
        computerChoice = "Paper";
    }
    else {computerChoice = "Scissors";
    }
    return computerChoice;
}
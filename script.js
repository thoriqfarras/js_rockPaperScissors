function getComputerChoice() {
    const numChoice = Math.floor(Math.random() * 3) + 1;
    let wordChoice;
    switch(numChoice) {
        case 1:
            wordChoice = 'rock';
            break;
        case 2:
            wordChoice = 'paper';
            break;
        case 3:
            wordChoice = 'scissors';
            break;
        default:
            break;
    }
    return wordChoice;
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection;
    if (playerChoice == computerChoice) {
        outcome = 'draw';
    } else if (playerChoice == "rock") {
        if (computerChoice == 'paper') {
            outcome = 'lose';
        } else if (computerChoice == 'scissors') {
            outcome = 'win';
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            outcome = 'win';
        } else if (computerChoice == 'scissors') {
            outcome = 'lose';
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            outcome = 'lose';
        } else if (computerChoice == 'paper') {
            outcome = 'win';
        }
    }
    return outcome;
}
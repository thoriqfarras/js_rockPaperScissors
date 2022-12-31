const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    const numChoice = Math.floor(Math.random() * 3) + 1; //random int between 1 and 3.
    let wordChoice;
    switch(numChoice) {
        case 1:
            wordChoice = ROCK;
            break;
        case 2:
            wordChoice = PAPER;
            break;
        case 3:
            wordChoice = SCISSORS;
            break;
        default:
            break;
    }
    return wordChoice;
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    if (playerChoice == computerChoice) {
        outcome = 'draw';
    } else if (playerChoice == ROCK) {
        if (computerChoice == PAPER) {
            outcome = 'lose';
        } else if (computerChoice == SCISSORS) {
            outcome = 'win';
        }
    } else if (playerChoice == PAPER) {
        if (computerChoice == ROCK) {
            outcome = 'win';
        } else if (computerChoice == SCISSORS) {
            outcome = 'lose';
        }
    } else if (playerChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            outcome = 'lose';
        } else if (computerChoice == PAPER) {
            outcome = 'win';
        }
    }
    return outcome;
}

function getUserInput(promptMessage) {
    let input;
    while (true) {
        input = prompt(promptMessage).toLowerCase();
        if (input == ROCK || input == PAPER || input == SCISSORS) {
            return input;
        } else {
            alert("Invalid input. Please try again.")
        }
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;
    let numOfDraw = 0
    
    for (let i = 0; i < 5; i++) {
        playerSelection = getUserInput("Enter your pick:");
        computerSelection = getComputerChoice();
        roundOutcome = playRound(playerSelection, computerSelection);
        
        if (roundOutcome == 'win') {
            console.log(`Player wins! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
        } else if (roundOutcome == 'draw') {
            console.log(`Draw! ${playerSelection} equals ${computerSelection}!`);
            numOfDraw++;
        } else if (roundOutcome == 'lose') {
            console.log(`Computer wins! ${playerSelection} falls short of ${computerSelection}!`);
            computerScore++;
        }
        setTimeout(3000);
    }
    console.log('Game ended. Final score after 5 round:\n' + 
                `Player  : ${playerScore}\n` +
                `Computer: ${computerScore}\n` +
                `Draw    : ${numOfDraw}`);
    console.log('Thank you for playing!');
}

let playerChoice;
let computerChoice = getComputerChoice();

const main = document.querySelector('#main');
const buttons = document.querySelectorAll('button');
const image = document.querySelector('img');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        image.src = `assets/${button.id}.png`
    });

    button.addEventListener('click', () => {
        if (button.id === ROCK) playerChoice = ROCK;
        else if (button.id === PAPER) playerChoice = PAPER;
        else if (button.id === SCISSORS) playerChoice = SCISSORS;
        console.log(playerChoice);
    });
});
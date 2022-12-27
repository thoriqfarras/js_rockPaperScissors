function getComputerChoice() {
    const numChoice = Math.floor(Math.random() * 3) + 1; //random int between 1 and 3.
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

function game() {
    let playerSelection;
    let computerSelection;
    let roundOutcome;
    let playerScore = 0;
    let computerScore = 0;
    let numOfDraw = 0
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your pick: ").toLowerCase();
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

game();
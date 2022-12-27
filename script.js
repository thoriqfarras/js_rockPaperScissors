function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3) + 1;
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
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function formatText(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    const player = formatText(playerSelection);
    const youWinText = `You Win! ${player} beats ${computerSelection}`;
    const youLoseText = `You Lose! ${computerSelection} beats ${player}`;
    const fallbackText = "Oops, something went wrong. Try again!";
    
    if (player === computerSelection) {
        return "It's a tie!";
    } else if (player === "Rock") {
        if (computerSelection === "Paper") {
            return youLoseText;
        } else {
            return youWinText;
        }
    } else if (player === "Paper") {
        if (computerSelection === "Scissors") {
            return youLoseText;
        } else {
            return youWinText
        }
    } else if (player === "Scissors") {
        if (computerSelection === "Rock") {
            return youLoseText;
        } else {
            return youWinText;
        }
    } else {
        return fallbackText;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

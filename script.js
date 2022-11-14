// Get random computer choice: rock, paper or scissors
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

// Format player choice, so that it is in lowercase with first capitalized letter
function formatText(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}


// Play one round of rock, paper, scissors
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

// Player input validation
function promptPlayer() {
    while (true) {
        let input = prompt("Choose rock, paper or scissors:");
        input = formatText(input);
        if (input === "Rock" || input === "Paper" || input === "Scissors") {
            return input;
        } else {
            alert("Incorrect input. Try again");
        }
    }
}

// Play main game consisting of 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = "";
    let finalMessage = "It's a tie!"

    for (let i = 0; i < 5; i++) {
        const playerSelection = promptPlayer();
        const computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.includes("You Win")) {
            playerScore++;
        } else if (roundResult.includes("You Lose")) {
            computerScore++;
        }

        console.log(`${playerScore}:${computerScore}. ${roundResult}`);
    }

    if (playerScore > computerScore) {
        return `Player: ${playerScore}, Computer: ${computerScore}. You Win!`
    } else if (playerScore < computerScore) {
        return `Player: ${playerScore}, Computer: ${computerScore}. You Lose!`
    }

    return finalMessage;
}


console.log(game());

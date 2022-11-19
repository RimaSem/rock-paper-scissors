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

// // Format player choice, so that it is in lowercase with first capitalized letter
// function formatText(str) {
//   return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
// }

// Play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  const youWinText = `You Win! ${playerSelection} beats ${computerSelection}`;
  const youLoseText = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const fallbackText = "Oops, something went wrong. Try again!";

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return youLoseText;
    } else {
      return youWinText;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return youLoseText;
    } else {
      return youWinText;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return youLoseText;
    } else {
      return youWinText;
    }
  } else {
    return fallbackText;
  }
}

// Play main game consisting of 5 rounds
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let roundResult = "";
//     let finalMessage = "It's a tie!"

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = promptPlayer();
//         const computerSelection = getComputerChoice();
//         roundResult = playRound(playerSelection, computerSelection);

//         if (roundResult.includes("You Win")) {
//             playerScore++;
//         } else if (roundResult.includes("You Lose")) {
//             computerScore++;
//         }

//         console.log(`${playerScore}:${computerScore}. ${roundResult}`);
//     }

//     if (playerScore > computerScore) {
//         return `Player: ${playerScore}, Computer: ${computerScore}. You Win!`
//     } else if (playerScore < computerScore) {
//         return `Player: ${playerScore}, Computer: ${computerScore}. You Lose!`
//     }

//     return finalMessage;
// }

const buttons = document.querySelectorAll("img");
const playerScore = document.querySelector("#p-scr");
const computerScore = document.querySelector("#c-scr");

buttons.forEach((button) => {
  button.addEventListener("click", game);
});

function game(e) {
  const score = document.querySelector(".score-title");
  const text = playRound(e.target.className, getComputerChoice());

  if (computerScore.textContent == 5 || playerScore.textContent == 5) return;

  if (text.includes("You Win!") && playerScore.textContent == 4) {
    ++playerScore.textContent;
    score.textContent = "~~~ YOU ARE THE WINNER! ~~~";
  } else if (text.includes("You Lose!") && computerScore.textContent == 4) {
    ++computerScore.textContent;
    score.textContent = "YOU LOST THE GAME! :(";
  } else {
    if (text.includes("You Win!")) {
      ++playerScore.textContent;
      score.textContent = text;
    } else if (text.includes("You Lose!")) {
      ++computerScore.textContent;
      score.textContent = text;
    } else {
      score.textContent = text;
    }
  }
}

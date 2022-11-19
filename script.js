const buttons = document.querySelectorAll("img");
const resetBtn = document.querySelector("button");
const playerScore = document.querySelector("#p-scr");
const computerScore = document.querySelector("#c-scr");
const score = document.querySelector(".score-title");

buttons.forEach((button) => {
  button.addEventListener("click", game);
});

resetBtn.addEventListener("click", resetGame);

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

// play 5 rounds of rock, paper, scissors
function game(e) {
  const text = playRound(e.target.className, getComputerChoice());

  if (computerScore.textContent == 5 || playerScore.textContent == 5) return;

  if (text.includes("You Win!") && playerScore.textContent == 4) {
    ++playerScore.textContent;
    score.classList.toggle("larger-text");
    score.textContent = "YOU WON THE GAME! YAY!";
    resetBtn.style.display = "initial";
  } else if (text.includes("You Lose!") && computerScore.textContent == 4) {
    ++computerScore.textContent;
    score.classList.toggle("larger-text");
    score.textContent = "YOU LOST THE GAME! :(";
    resetBtn.style.display = "initial";
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

function resetGame() {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  score.classList.toggle("larger-text");
  score.textContent = "Score";
  resetBtn.style.display = "none";
}

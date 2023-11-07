const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (
    selection !== 'ROCK' &&
    selection !== 'PAPER' &&
    selection !== 'SCISSORS'
  ) {
    alert(`Invalid choice! We choice ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue > 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pCoice = DEFAULT_USER_CHOICE) =>
  cChoice === pCoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pCoice === PAPER) ||
      (cChoice === PAPER && pCoice === SCISSORS) ||
      (cChoice === SCISSORS && pCoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//   if (cChoice === pCoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pCoice === PAPER) ||
//     (cChoice === PAPER && pCoice === SCISSORS) ||
//     (cChoice === SCISSORS && pCoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'win.';
  } else {
    message += 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});



'use strict';

// Dices
const dicesToRoll = {
  1: 'dice-1.png',
  2: 'dice-2.png',
  3: 'dice-3.png',
  4: 'dice-4.png',
  5: 'dice-5.png',
  6: 'dice-6.png',
};

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

// Starting conditions

const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let currentPlayer = 0;
let holdScore = 0;

// Rolling the dice
rollDiceBtn.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  // 1. Generating a random dice roll
  const dices = Math.floor(Math.random() * 6) + 1;
  console.log(dices);
  // 2. Display dice
  diceEl.src = dicesToRoll[dices];
  // SIMPLER WAY OF DISPLAYING diceEl.src = `dice-${dices}.png`;
  // 3. Check for player rolled 1 switch to other player
  if (dices !== 1) {
    // add to current score
    currentScore += dices;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    // switch to other player
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    holdScore = 0;
    currentScore = 0;
    // GOOD LUCK UNDERSTANDING MY CODE AFTER THIS COMMENT - IT WORKS THO
    if (currentPlayer === 0) {
      holdScorePlayer0 = 0;
      score0El.textContent = holdScorePlayer0;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      activePlayer0.classList.remove('player--active');
      activePlayer1.classList.add('player--active');
    } else if (currentPlayer === 1) {
      holdScorePlayer1 = 0;
      score1El.textContent = holdScorePlayer1;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      activePlayer1.classList.remove('player--active');
      activePlayer0.classList.add('player--active');
    }

    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }
});

let holdScorePlayer0 = 0;
let holdScorePlayer1 = 0;

holdScoreBtn.addEventListener('click', function () {
  if (currentPlayer === 0) {
    holdScore = currentScore;
    holdScorePlayer0 += holdScore;
    holdScore = 0;
    score0El.textContent = holdScorePlayer0;
    activePlayer0.classList.remove('player--active');
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = 1;
    activePlayer1.classList.add('player--active');
    currentScore = 0;
  } else {
    holdScore = currentScore;
    holdScorePlayer1 += holdScore;
    holdScore = 0;
    score1El.textContent = holdScorePlayer1;
    activePlayer1.classList.remove('player--active');
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = 0;
    activePlayer0.classList.add('player--active');
    currentScore = 0;
  }
});

newGameBtn.addEventListener('click', function () {
  currentPlayer = 0;
  activePlayer0.classList.add('player--active');
  activePlayer1.classList.remove('player--active');
  currentScore = 0;
  document.getElementById(`current--${0}`).textContent = 0;
  document.getElementById(`current--${1}`).textContent = 0;
  holdScore = 0;
  holdScorePlayer0 = 0;
  score0El.textContent = 0;
  holdScorePlayer1 = 0;
  score1El.textContent = 0;
});

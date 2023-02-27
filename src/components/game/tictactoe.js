const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const winsDisplay = document.querySelector('#wins');
const lossesDisplay = document.querySelector('#losses');
const tiesDisplay = document.querySelector('#ties');
const resetButton = document.querySelector('#reset');
const hapticButton = document.querySelector('#toggle-haptic');

let currentPlayer = 'X';
let playerXScore = 0;
let playerOScore = 0;
let hapticEnabled = false;
let playerXScoreDisplay;
let playerOScoreDisplay;
let wins = 1;
let losses = 0;
let ties = 0;

// Add event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
resetButton.addEventListener('click', resetGame);
hapticButton.addEventListener('click', toggleHaptic);

// Handle cell clicks
function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const cellValue = cell.textContent;

    if (cellValue !== '') {
        return;
    }

    // Update the board
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    // Check if the current player won
    if (checkWin()) {
        handleWin();
        return;
    }

    // Check if it's a tie
    if (checkTie()) {
        handleTie();
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // Play haptic feedback
    if (hapticEnabled) {
        playHapticFeedback();
    }
}

// Check if the current player won
function checkWin() {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (checkRow(row)) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (checkColumn(col)) {
            return true;
        }
    }

    // Check diagonals
    if (checkDiagonal1() || checkDiagonal2()) {
        return true;
    }

    // If no win condition is met, return false
    return false;
}

// Check if the specified row is a win for the current player
function checkRow(row) {
    const cell1 = board.querySelector(`[data-row="${row}"][data-col="0"]`);
    const cell2 = board.querySelector(`[data-row="${row}"][data-col="1"]`);
    const cell3 = board.querySelector(`[data-row="${row}"][data-col="2"]`);
    return (
        cell1.textContent === currentPlayer &&
        cell2.textContent === currentPlayer &&
        cell3.textContent === currentPlayer
    );
}

// Check if the specified column is a win for the current player
function checkColumn(col) {
    const cell1 = board.querySelector(`[data-row="0"][data-col="${col}"]`);
    const cell2 = board.querySelector(`[data-row="1"][data-col="${col}"]`);
    const cell3 = board.querySelector(`[data-row="2"][data-col="${col}"]`);
    return (
        cell1.textContent === currentPlayer &&
        cell2.textContent === currentPlayer &&
        cell3.textContent === currentPlayer
    );
}

// Check if diagonal 1 is a win for the current player
function checkDiagonal1() {
    const cell1 = board.querySelector(`[data-row="0"][data-col="0"]`);
    const cell2 = board.querySelector(`[data-row="1"][data-col="1"]`);
    const cell3 = board.querySelector(`[data-row="2"][data-col="2"]`);
    return (
        cell1.textContent === currentPlayer &&
        cell2.textContent === currentPlayer &&
        cell3.textContent === currentPlayer
    );
}

// Check if diagonal 2 is a win for the current player
function checkDiagonal2() {
    const cell1 = board.querySelector(`[data-row="0"][data-col="2"]`);
    const cell2 = board.querySelector(`[data-row="1"][data-col="1"]`);
    const cell3 = board.querySelector(`[data-row="2"][data-col="0"]`);
    return (
        cell1.textContent === currentPlayer &&
        cell2.textContent === currentPlayer &&
        cell3.textContent === currentPlayer
    );
}

// Check if the board is full and it's a tie
function checkTie() {
    const cells = board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            // There is an empty cell, the game is not a tie
            return false;
        }
    }
    // All cells are full, the game is a tie
    return true;
}

// Handle a win by the current player
function handleWin() {
    if (currentPlayer === 'X') {
        playerXScore++;
    } else {
        playerOScore++;
    }
    displayWinner();
    displayScores();
    disableBoard();
}

// Handle a tie game
function handleTie() {
    // Display the tie message and the scores
    displayTie();
    displayScores();
    disableBoard();
}

// Display the winner and the scores
function displayWinner() {
    winsDisplay.textContent = ` ${playerXScore} parties gagnée(s) pour ${currentPlayer} !`;
    lossesDisplay.textContent = ` ${playerOScore} parties gagnée(s) pour l'ordinateur !`;
    resetGame();
}

// Display the tie message and the scores
function displayTie() {
    lossesDisplay.textContent = 'It\'s a tie!';
}

// Display the scores
function displayScores() {
    playerXScoreDisplay.textContent = playerXScore;
    playerOScoreDisplay.textContent = playerOScore;
}

// Disable the board
function disableBoard() {
    board.classList.add('disabled');
}

// Enable the board
function enableBoard() {
    board.classList.remove('disabled');
}

// Reset the game
function resetGame() {
    // Reset the board
    const cells = board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].classList.remove('X', 'O');
    }
    currentPlayer = 'X';
    enableBoard();
    message.textContent = '';
    if (hapticEnabled) {
        navigator.vibrate(0);
    }
}

// Toggle haptic feedback
function toggleHaptic() {
    hapticEnabled = !hapticEnabled;
    navigator.vibrate(5000);
    const haptic = hapticEnabled ? 'on' : 'off';
    hapticButton.textContent = `Haptic feedback: ${haptic}`;
}

// Play haptic feedback
function playHapticFeedback() {
    navigator.vibrate(100);
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
hapticButton.addEventListener('click', toggleHaptic);


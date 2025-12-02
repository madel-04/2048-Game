class UI {
    constructor() {
        this.scoreDisplay = document.getElementById('score');
        this.bestScoreDisplay = document.getElementById('best-score');
        this.gridContainer = document.getElementById('grid-container');
        this.restartButton = document.getElementById('restart-button');
        this.undoButton = document.getElementById('undo-button');
        this.redoButton = document.getElementById('redo-button');
        this.newGameButton = document.getElementById('new-game-button');

        // Restart button
        this.restartButton.addEventListener('click', () => {
            if (window.game && typeof window.game.restartGame === 'function') {
                window.game.restartGame();
            } else {
                location.reload();
            }
        });

        // New Game button
        this.newGameButton.addEventListener('click', () => {
            if (window.game && typeof window.game.restartGame === 'function') {
                window.game.newGame();
            } else {
                location.reload();
            }
        });

        // Undo and Redo buttons (implement functionality in game.js)
        this.undoButton.addEventListener('click', () => {
            if (window.game && typeof window.game.undoMove === 'function') {
                window.game.undoMove();
            }
        });

        this.redoButton.addEventListener('click', () => {
            if (window.game && typeof window.game.redoMove === 'function') {
                window.game.redoMove();
            }
        });
    }

    updateScore(score, bestScore) {
        this.scoreDisplay.innerText = score;
        this.bestScoreDisplay.innerText = bestScore;
    }

    updateGrid(board) {
        this.gridContainer.innerHTML = '';
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const value = board[r][c];
                const tileWrapper = document.createElement('div');
                tileWrapper.classList.add('tile');
                if (value > 0) tileWrapper.classList.add(`tile-${value}`);
                const tileInner = document.createElement('div');
                tileInner.classList.add('tile-inner');
                tileInner.innerText = value > 0 ? value : '';
                tileWrapper.appendChild(tileInner);
                this.gridContainer.appendChild(tileWrapper);
            }
        }
    }

    showGameOver(score) {
        setTimeout(() => {
            alert(`Game Over! Your score: ${score}`);
        }, 300);
    }

    showWin(score) {
        setTimeout(() => {
            const continueGame = confirm(`You won! Score: ${score}\n\nDo you want to continue playing?`);
            if (!continueGame && window.game) {
                window.game.restartGame();
            }
        }, 300);
    }
}

// create ui instance globally so game.js can use it
const ui = new UI();
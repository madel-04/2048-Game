class Game {
    constructor() {
        this.board = new Board();
        this.score = 0;
        this.bestScore = this.loadBestScore();
        this.isGameOver = false;
        this.hasWon = false;
        this.history = [];
        this.future = [];
        this.initialState = null;
        this.init();
    }

    init() {
        this.board.setup();
        this.score = 0;
        this.isGameOver = false;
        this.hasWon = false;
        this.history = [];
        this.future = [];
        
        this.initialState = {
            grid: this.board.grid.map(row => [...row]),
            score: 0
        };

        this.saveState();
        this.updateUI();
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('keydown', (event) => {
            if (this.isGameOver) return;

            const key = event.key;
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
                event.preventDefault();
                this.moveTiles(key.replace('Arrow', '').toLowerCase());
            }
        });
    }

    moveTiles(direction) {
        const { moved, score } = this.board.move(direction);
        if (!moved) return;

        this.score += score;
        this.future = [];
        this.saveState();
        this.board.addRandomTile();

        if (this.score > this.bestScore) {
            this.bestScore = this.score;
            this.saveBestScore();
        }
        this.updateUI();
        this.checkWin();
        this.checkGameOver();
    }

    saveState() {
        this.history.push({
            grid: this.board.grid.map(row => [...row]),
            score: this.score,
        });
    }

    undoMove() {
        if (this.history.length > 1) {
            this.future.push(this.history.pop());
            const lastState = this.history[this.history.length - 1];
            this.board.grid = lastState.grid.map(row => [...row]);
            this.score = lastState.score;
            this.isGameOver = false;
            this.hasWon = false;
            this.updateUI();
        }
    }

    redoMove() {
        if (this.future.length > 0) {
            const futureState = this.future.pop();
            this.history.push(futureState);
            this.board.grid = futureState.grid.map(row => [...row]);
            this.score = futureState.score;
            this.updateUI();
            this.checkGameOver();
            this.checkWin();
        }
    }

    updateUI() {
        ui.updateScore(this.score, this.bestScore);
        ui.updateGrid(this.board.grid);
    }

    checkWin() {
        if (this.hasWon) return;

        for (let r = 0; r < this.board.size; r++) {
            for (let c = 0; c < this.board.size; c++) {
                if (this.board.grid[r][c] === 2048 && !this.hasWon) {
                    this.hasWon = true;
                    ui.showWin(this.score);
                    return;
                }
            }
        }
    }

    checkGameOver() {
        if (this.isGameOver) return;
        if (this.hasWon) return;
        if (!this.board.canMove() && this.board.isFull()) {
            this.isGameOver = true;
            
            if (this.score > this.bestScore) {
                this.bestScore = this.score;
                this.saveBestScore();
            }
            ui.showGameOver(this.score);
        }
    }

    loadBestScore() {
        return parseInt(localStorage.getItem('bestScore')) || 0;
    }

    saveBestScore() {
        localStorage.setItem('bestScore', this.bestScore);
    }

    restartGame() {
        if (this.initialState) {
            this.board.grid = this.initialState.grid.map(row => [...row]);
            this.score = this.initialState.score;
            this.isGameOver = false;
            this.hasWon = false;
            this.history = [];
            this.future = [];
            this.saveState();
            this.updateUI();
        }
    }
    newGame() {
        this.board.setup();
        this.score = 0;
        this.isGameOver = false;
        this.hasWon = false;
        this.history = [];
        this.future = [];
        
        // Actualizar el estado inicial con las nuevas tiles
        this.initialState = {
            grid: this.board.grid.map(row => [...row]),
            score: 0
        };
        
        this.saveState();
        this.updateUI();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
});
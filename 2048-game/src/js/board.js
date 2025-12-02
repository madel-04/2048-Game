class Board {
    constructor(size = 4) {
        this.size = size;
        this.grid = this.createGrid();
    }

    createGrid() {
        return Array.from({ length: this.size }, () => Array(this.size).fill(0));
    }

    setup() {
        this.grid = this.createGrid();
        this.addRandomTile();
        this.addRandomTile();
    }

    addRandomTile() {
        const emptyTiles = [];
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.grid[r][c] === 0) emptyTiles.push({ r, c });
            }
        }
        if (emptyTiles.length === 0) return false;
        const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        this.grid[r][c] = Math.random() < 0.9 ? 2 : 4;
        return true;
    }

    transpose(grid) {
        const N = this.size;
        const newGrid = this.createGrid();
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                newGrid[c][r] = grid[r][c];
            }
        }
        return newGrid;
    }

    slideAndMergeLeft(row) {
        const result = row.filter(v => v !== 0);
        let score = 0;
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i] === result[i + 1]) {
                result[i] = result[i] * 2;
                score += result[i];
                result[i + 1] = 0;
                i++;
            }
        }
        const newRow = result.filter(v => v !== 0);
        while (newRow.length < this.size) newRow.push(0);
        return { newRow, score };
    }

    move(direction) {
        let moved = false;
        let totalScore = 0;
        let workingGrid = this.grid.map(row => row.slice());

        if (direction === 'up') {
            workingGrid = this.transpose(workingGrid);
        } else if (direction === 'down') {
            workingGrid = this.transpose(workingGrid).map(row => row.reverse());
        } else if (direction === 'right') {
            workingGrid = workingGrid.map(row => row.reverse());
        }

        for (let r = 0; r < this.size; r++) {
            const originalRow = workingGrid[r].slice();
            const { newRow, score } = this.slideAndMergeLeft(originalRow);
            workingGrid[r] = newRow;
            totalScore += score;
            if (!moved && JSON.stringify(originalRow) !== JSON.stringify(newRow)) {
                moved = true;
            }
        }

        let finalGrid;
        if (direction === 'up') {
            finalGrid = this.transpose(workingGrid);
        } else if (direction === 'down') {
            finalGrid = this.transpose(workingGrid.map(row => row.reverse()));
        } else if (direction === 'right') {
            finalGrid = workingGrid.map(row => row.reverse());
        } else {
            finalGrid = workingGrid;
        }

        this.grid = finalGrid;
        return { moved, score: totalScore };
    }

    isFull() {
        return this.grid.every(row => row.every(cell => cell !== 0));
    }

    canMove() {
        if (!this.isFull()) return true;

        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size - 1; c++) {
                if (this.grid[r][c] === this.grid[r][c + 1]) {
                    return true;
                }
            }
        }

        for (let r = 0; r < this.size - 1; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.grid[r][c] === this.grid[r + 1][c]) {
                    return true;
                }
            }
        }
        return false;
    }
}
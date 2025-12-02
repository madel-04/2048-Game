class Tile {
    constructor(value) {
        this.value = value;
    }

    merge(tile) {
        if (this.value === tile.value) {
            this.value *= 2;
            return true;
        }
        return false;
    }
}
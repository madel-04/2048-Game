# 2048 Game

## Overview
2048 is a sliding block puzzle game that combines numbers to create a tile with the value of 2048. The game is played on a 4x4 grid, and the objective is to slide numbered tiles on the grid to combine them and create a tile with the number 2048.

## Project Structure
```
2048-game
├── src
│   ├── css
│   │   └── style.css      # Styles for the game
│   ├── js
│   │   ├── board.js       # Game board management
│   │   ├── game.js        # Main game logic
│   │   ├── tile.js        # Tile class definition
│   │   └── ui.js          # User interface updates
│   └── index.html         # HTML structure for the game
├── Dockerfile              # Instructions to build the Docker image
├── docker-compose.yml      # Defines services for the Docker application
├── package.json            # Project configuration and dependencies
├── package-lock.json       # Locks the versions of dependencies
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd 2048-game
   ```
3. Build the Docker image:
   ```
   docker compose build
   docker compose up
   ```
4. Open your browser and navigate to `http://localhost:8081` to play the game.
5. To stop the container, press Ctrl + C and
   ```
   docker compose down
   ```

## Usage
1. Open the game in a web browser to start the game.
2. Use the arrow keys (or swipe gestures on mobile) to move the tiles.
3. Combine tiles with the same number to create a new tile with their sum.
4. The game ends when there are no more valid moves available.

## Game Mechanics
- The game starts with two tiles on the board, each with a value of 2 or 4.
- Tiles slide in the direction of the arrow key pressed.
- When two tiles with the same number collide, they merge into one tile with their sum.
- The score increases by the value of the merged tiles.
- The game is won when a tile with the value of 2048 is created.
- The game is lost when there are no more valid moves available.

## Contributing
Feel free to submit issues or pull requests to improve the game or fix bugs.
# Find Your Hat Game

Find Your Hat is a console-based game where the player has to navigate a field to find their hat without falling into a hole.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Game Logic](#game-logic)
- [Contributing](#contributing)
- [License](#license)

## Installation

Ensure you have Node.js installed on your machine. Clone this repository and navigate to the project directory. Run `npm install` to install the required dependencies.

## Usage

Run the game by executing the `main.js` file with Node.js. The game controls are as follows:

- U: Move Up
- D: Move Down
- L: Move Left
- R: Move Right

You can customize the field size and the percentage of holes in the field by modifying the `height`, `width`, and `holePercentage` variables in the `main.js` file.

## Game Logic

The game logic is encapsulated in the `Field` class. The `Field` class has several methods:

- `print()`: This method prints the current state of the field.
- `askForMove()`: This method asks the player for the next move.
- `isWon()`: This method checks if the player has won the game.
- `isLost()`: This method checks if the player has lost the game.
- `updateField()`: This method updates the field after each move.
- `playGame()`: This method contains the main game loop.
- `generateField()`: This static method generates a new field.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
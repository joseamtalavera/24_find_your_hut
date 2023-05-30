const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.playerPos = {x:0, y:0}
    }

    print() {
        for (let row of this.field) {
            console.log(row.join(''));
        }
    }

    askForMove() {
        const direction = prompt('Which way? ').toUpperCase();
        switch(direction) {
          case 'U':
            this.playerPos.y -= 1;
            break;
          case 'D':
            this.playerPos.y += 1;
            break;
          case 'L':
            this.playerPos.x -= 1;
            break;
          case 'R':
            this.playerPos.x += 1;
            break;
          default:
            console.log('Enter U, D, L or R to move Up, Down, Left or Right');
            this.askForMove();
            break;
        }
    }

    isWon() {
        return this.field[this.playerPos.y][this.playerPos.x] === hat;
    }

    isLost() {
        return  this.playerPos.y < 0 ||
                this.playerPos.y >= this.field.length ||
                this.playerPos.x < 0 ||
                this.playerPos.x >= this.field[0].length ||
                this.field[this.playerPos.y][this.playerPos.x] === hole;

    }

    updateField() {
        if (this.isWon()|| this.isLost()) {
            return;
        }
        this.field[this.playerPos.y][this.playerPos.x] = pathCharacter;
    }

    playGame() {
        while(true) {
            this.print();
            this.askForMove();
            this.updateField();

            if(this.isWon()) {
                console.log('Congratulations, you found your hat!');
                break;
            }
            if(this.isLost()) {
                console.log('Sorry, you lost!');
                break;
            }
       }
    }

    static generateField(height, width, holePercentage = 0.1) {
        /*
        - new Array(height): this create a new array with a length equal to the height value. This will be the outer 
        array of the two-dimensional array.
        - .fill(null): the .fill() method is used to populate each element of the array with the value 'null'. this 
        step is optional and is used to initialize the array with a placeholder value. in this case, it fills the entiere 
        outer with null values
        - .map() => new Array(width).fill('░'): the .map() method is then called on the array. it iterates over each element
        of the array and applies a mapping function to transform the elements. the arrow function creates a new inner array
        with the length of the width value. the .fill() method is used to populate each element of the inner array with the
        value '░'.
        */
        const field = new Array(height).fill(null).map(() => new Array(width).fill('░'));
        let holeCount = Math.floor(height * width * holePercentage);

        while(holeCount > 0) {
            const randomRow = Math.floor(Math.random() * height);
            const randomCol = Math.floor(Math.random() * width);

            if(randomRow !== 0 || randomCol !== 0) {
                if(field[randomRow][randomCol] !== 'O') {
                    field[randomRow][randomCol] = 'O';
                    holeCount--;
                }
            }
        }
        let hatPosition = false;
        
        do{
            const randomRow = Math.floor(Math.random() * height);
            const randomCol = Math.floor(Math.random() * width);
            if((randomRow !== 'O' || randomCol !== 'O') && field[randomRow][randomCol] !== 'O') {
                field[randomRow][randomCol] = 'ˆ';
                hatPosition = true;
            }
        } while (!hatPosition)
        return field;
    }

}
/*
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.playGame()
*/

const height = 5; 
const width = 10; 
const holePercentage = 0.2; 

const myField = new Field (Field.generateField(height, width, holePercentage));
myField.playGame();
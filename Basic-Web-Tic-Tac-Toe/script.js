const WinningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const restartButton = document.getElementById('restartButton');

const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

const restartGame = () =>{
    cellArray().forEach(cell => cell.innerText = '');
    cellArray().forEach(cell => cell.classList.remove('winner'));
    winningMessageElement.classList.remove('show');
    enableListeners();
}
const cellArray = () => Array.from(document.getElementsByClassName('cell'));    /* Cell Array */

const cellNumId = (cell) => Number.parseInt(cell.id.replace('q', ''));

const emptyCells = () => cellArray().filter(cell => cell.innerText === '');

const enableListeners = () => cellArray().forEach(cell => cell.addEventListener('click', clickFn));  /* Adding click event */
const disableListeners = () => cellArray().forEach(cell => cell.removeEventListener('click', clickFn));  /* Removing click event */

const allSame = (arr) => arr.every(cell => cell.innerText === arr[0].innerText && cell.innerText !== ''); /* CHecking for a winner without empty*/

const takeTurn = (index, letter) => cellArray()[index].innerText = letter;

const winningMessageElement = document.getElementById('winningMessage');


const clickFn = (e) => {
    takeTurn(cellNumId(e.target), 'x');
    if(!checkForVictory())
        opponentTurn();
};


const opponentChoice = () => cellNumId(emptyCells()[Math.floor(Math.random() * emptyCells().length)]); /* Random returns a float number and floor turns to lower int = (0-0.9999999) * 9   */

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {                  /* Time out function (function , delay in milsec)*/
        takeTurn(opponentChoice(), 'o');
        if(!checkForVictory())
            enableListeners();
    }, 1000);
}

const checkForVictory = () => {
    let victory = false;
    WinningCombo.forEach(_c => {
        const _grid = cellArray();
        const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]];
        if(allSame(sequence)) {
            victory = true;
            endGame(sequence);      /* Comparing to winning sequence */
        }
    });
    return victory;
};

const endGame = (winningSequence) => { 
    winningSequence.forEach(cell => cell.classList.add('winner'));
    disableListeners();
      winningMessageElement.classList.add('show');
      restartButton.addEventListener('click', restartGame);     /* Restart Button Event */
      winningMessageTextElement.innerText = 'Game Over';
};



enableListeners();
const diceOne = document.getElementById('diceOne');
const diceTwo = document.getElementById('diceTwo');
const resultTable = document.getElementById('resultTable');

rollDice = (dice) => dice.innerHTML = Math.floor(Math.random() * 6) + 1;

rollDices = () => {
    rollDice(diceOne);
    rollDice(diceTwo);
}
addRow = (message) =>
    resultTable.innerHTML += `<tr>` +
    `<td>${message}</td>` +
    `<td>${diceOne.innerText}</td>` +
    `<td>${diceTwo.innerText}</td>` +
    `</tr>`;


function cubeRollPromise() {
    return new Promise((resolve, reject) => {
        if (diceOne.innerText !== diceTwo.innerText)
            resolve();
        else {
            reject();
        }
    })
}
cubeRoll = () => {
    rollDices();
    cubeRollPromise().then(() => { addRow('Resolved') }).catch(() => { addRow('Rejected') });
}


document.getElementById("btnRoll").addEventListener('click', cubeRoll);


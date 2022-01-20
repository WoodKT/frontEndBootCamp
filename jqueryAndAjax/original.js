let round = 0;
let gameStop = false;
let turnState = 1;
let gameStat = ['NO WINNER','','','','','','','','',''];

onClick('clear', () => {  
    let headerText = document.getElementById('turn');
    gameStat = ['NO WINNER','','','','','','','','',''];
    turnState = 1;
    gameStop = false;
    drawDOM();
    console.log('Game Reset!');
    headerText.innerHTML = "New Game, X's turn";

});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function drawDOM() {
    // clear the view, and re"draw" the table
    let tictactoeDiv = document.getElementById('board');
    for (let index=1; index<=9; index++ ) {
        //reset each button to original value
        document.getElementById(`s-${index}`).innerHTML=index;
    }
    if (round > 0) {
        $('#restart-game').show();
    } else {
        let lineBreak = document.createElement('br');
        tictactoeDiv.appendChild(lineBreak);
        lineBreak = document.createElement('br');
        tictactoeDiv.appendChild(lineBreak);
        let alert = document.createElement('alert');
        alert.setAttribute('class', 'alert alert-success');
        alert.setAttribute('role', 'alert');
        alert.setAttribute('id', 'restart-game');
        alert.innerHTML = 'Tic-Tac-Toe Game has been restarted!';
        tictactoeDiv.appendChild(alert);
    }
    gameId++;
    setTimeout(() => $('#restart-game').hide(), 1000);
}


// Set-up an EventListener for each btn in the game.  

for (let btnIndex=1; btnIndex <=9; btnIndex++) {
    onClick(`s-${btnIndex}`, () => {
        // Change Button to display players symbol
        if (!gameStop) {
            let headerText = document.getElementById('turn');
            console.log(gameStat);
            if (gameStat[btnIndex] == '') {
                console.log(`Turn #${turnState}:`);  
                if (turnState % 2) {
                    document.getElementById(`s-${btnIndex}`).innerHTML = 'X'
                    gameStat[btnIndex] = 'X';
                    console.log(`\t\t\t X's turn!`);
                    headerText.innerHTML = `Turn #${turnState+1}: O's turn`;
                } else {
                    document.getElementById(`s-${btnIndex}`).innerHTML = 'O'
                    gameStat[btnIndex] = 'O';
                    console.log(`\t\t\t O's turn!`);
                    headerText.innerHTML = `Turn #${turnState+1}: X's turn`;
                }
                turnState++;



                let winner = checkForWinner();
                console.log(winner);
                if (winner != '') {
                    let headerText = document.getElementById('turn');
                    headerText.innerHTML = `Game over!  ${winner}`;
                    console.log(`Game over! ${winner}`); 
                    if (round > 0) {
                        $('#game-over').show();
                    } else {
                        let tictactoeDiv = document.getElementById('board');
                        let lineBreak = document.createElement('br');
                        tictactoeDiv.appendChild(lineBreak);
                        let gameOverAlert = document.createElement('alert');
                        gameOverAlert.setAttribute('class', 'alert alert-success');
                        gameOverAlert.setAttribute('role', 'alert');
                        gameOverAlert.setAttribute('id', 'game-over');
                        gameOverAlert.innerHTML = 'Game ended!';
                        tictactoeDiv.appendChild(gameOverAlert);  
                    }
                    setTimeout(() => $('#game-over').hide(), 3000);
                }
                
            } else {
                console.log('INVALID CHOICE');
            }
        } else {
            turnState++;
            console.log('Game Over');
        }
    });
}

function checkForWinner() {
    let winner = '';
    console.log(gameStat);
    if ( (gameStat[1] === gameStat[2]) && (gameStat[1] === gameStat[3])
         && (gameStat[1] !== '')) {
        winner = `Winner is ${gameStat[1]}`;
        gameStop = true;
    } else if ( (gameStat[4] === gameStat[5]) && (gameStat[4] === gameStat[6])
                && (gameStat[4] !== '')) {
        winner = `Winner is ${gameStat[4]}`;
        gameStop = true;
    } else if ( (gameStat[7] === gameStat[8]) && (gameStat[7] === gameStat[9])
                && (gameStat[7] !== '') ) {
        winner = `Winner is ${gameStat[7]}`;
        gameStop = true;
    } else if ( (gameStat[1] === gameStat[4]) && (gameStat[1] === gameStat[7]) 
                && (gameStat[1] !== '')) {
        winner = `Winner is ${gameStat[1]}`;
        gameStop = true;
    } else if ( (gameStat[2] === gameStas[5]) && (gameStat[2] === gameStat[8])
                && (gameStat[2] !== '')) {
        winner = `Winner is ${gameStat[2]}`;
        gameStop = true;
    } else if ( (gameStat[3] === gameStat[6]) && (gameStat[3] === gameStat[9])
                && (gameStat[3] !== '')) {
        winner = `Winner is ${gameStat[3]}`;
        gameStop = true;
    } else if ( (gameStat[1] === gameStat[5]) && (gameStat[1] === gameStat[9])
                && (gameStat[1] !== '')) {
        winner = `Winner is ${gameStat[1]}`;
        gameOver = true;
    } else if (( gameStat[3] === gameStat[5]) && (gameStat[3] === gameStat[7])
                && (gameStat[3] !== '')) {
        winner = `Winner is ${gameStat[3]}`;
        gameStop = true;
    } else if (turnState > 9){
        winner = `The game is a draw!`;
        gameStop = true;
    }  
    return winner;
}

let gameEnd = false;
let turnState = 1;
let moves = ['NONE','','','','','','','','',''];

onClick('clear', () => {  
    let headerText = document.getElementById('turn');
    moves = ['NONE','','','','','','','','',''];
    turnState = 1;
    gameEnd = false;
    drawDOM();
    headerText.innerHTML = "New Game, X's turn";
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function drawDOM() {
    for (let i=1; i<=9; i++ ) {
        document.getElementById(`b-${i}`).innerHTML=' ';
    }
}

for (let moveI=1; moveI <=9; moveI++) {
    onClick(`b-${moveI}`, () => {
        if (!gameEnd) {
            let headerText = document.getElementById('turn');
            if (moves[moveI] == '') {
                console.log(`Turn #${turnState}:`);  
                if (turnState % 2) {
                    document.getElementById(`b-${moveI}`).innerHTML = 'X'
                    moves[moveI] = 'X';
                    headerText.innerHTML = `Turn #${turnState+1}: O's turn`;
                } else {
                    document.getElementById(`b-${moveI}`).innerHTML = 'O'
                    moves[moveI] = 'O';
                    headerText.innerHTML = `Turn #${turnState+1}: X's turn`;
                }
                turnState++;

                let lead = winCheck();
                if (lead != '') {
                    let headerText = document.getElementById('turn');
                    headerText.innerHTML = `Game over!  ${lead}`;
                }  
            }
        } 
    });
}

function winCheck() {
    let lead = '';
    console.log(moves);
    if ( (moves[1] === moves[2]) && (moves[1] === moves[3])
         && (moves[1] !== '')) {
        lead = `Winner is ${moves[1]}`;
        gameEnd = true;
    } else if ( (moves[4] === moves[5]) && (moves[4] === moves[6])
                && (moves[4] !== '')) {
        lead = `Winner is ${moves[4]}`;
        gameEnd = true;
    } else if ( (moves[7] === moves[8]) && (moves[7] === moves[9])
                && (moves[7] !== '') ) {
        lead = `Winner is ${moves[7]}`;
        gameEnd = true;
    } else if ( (moves[1] === moves[4]) && (moves[1] === moves[7]) 
                && (moves[1] !== '')) {
        lead = `Winner is ${moves[1]}`;
        gameEnd = true;
    } else if ( (moves[2] === moves[5]) && (moves[2] === moves[8])
                && (moves[2] !== '')) {
        lead = `Winner is ${moves[2]}`;
        gameEnd = true;
    } else if ( (moves[3] === moves[6]) && (moves[3] === moves[9])
                && (moves[3] !== '')) {
        lead = `Winner is ${moves[3]}`;
        gameEnd = true;
    } else if ( (moves[1] === moves[5]) && (moves[1] === moves[9])
                && (moves[1] !== '')) {
        lead = `Winner is ${moves[1]}`;
        gameOver = true;
    } else if (( moves[3] === moves[5]) && (moves[3] === moves[7])
                && (moves[3] !== '')) {
        lead = `Winner is ${moves[3]}`;
        gameEnd = true;
    } else if (turnState > 9){
        lead = `The game is a draw!`;
        gameEnd = true;
    }  
    return lead;
}
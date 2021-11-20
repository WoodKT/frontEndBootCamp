class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
    describe() {
      return `${this.rank} of ${this.suit} is equal to a value of ${this.value}`
  }
}

class Deck {
    constructor() {
        this.cards = [];
        this.hand1 = [];
        this.hand2 = [];
    }

    createDeck(){
      const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
      const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

      for(var a = 0; a < suits.length; a++){
        for(var b = 0; b < ranks.length; b++){
          this.cards.push( new Card(suits[a], ranks[b], values[b]));
        }
      }
    }
    //https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    shuffle(array){
      var c = array.length, e,d;
      while(c){
        d = Math.floor(Math.random()* c--);
        e = array[c];
        array[c] = array[d];
        array[d] = e;
      }
      return array;
    }
       dealCards(){
        this.hand1 = this.cards.slice(0,26);
        this.hand2 = this.cards.slice(26, 52);
      }
  }

  /*
  class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
        //Used for MOCHA/CHAI testing
        getPlayerName() {
          return this.name;
      }
        // method to increment score based on winning 
        incrementScore() {
          this.score += 1;
      }
      drawCard() {
        return this.hand.pop();
    }
  }
*/

class Board {
    constructor() {
      this.newDeck = new Deck();
      this.playedCards = [];
      this.score = 0;
      this.round = 1;
    }

    startBoard() {
      this.newDeck.createDeck();
      this.newDeck.shuffle(this.newDeck.cards);
      this.newDeck.dealCards();
    }

            // method to increment score based on winning 
      incrementScore() {
        this.score += 1;
      }

    playCard(){
      if( this.newDeck.hand1.length > 0 && this.newDeck.hand2.length > 0){
        this.playedCards.push(this.newDeck.hand1.pop());
        this.playedCards.push(this.newDeck.hand2.pop());
      }
      else if (this.newDeck.hand1.length === 0){
        for(let f = 0; f < this.playedCards.length; f++){
        this.newDeck.hand2.unshift(this.playedCards[f]);
        }
        console.log(`Player 2 wins`);
      }
      else if(this.newDeck.hand2.length === 0){
        for(let g = 0; g < this.playedCards.length; g++){
          this.newDeck.hand1.unshift(this.playedCards[g]);
        }
        console.log(`Player 1 wins`);
      }
    }

    compareCards(){
      if( this.playedCards.length > 0){ 
      if(this.playedCards[0].value > this.playedCards[1].value){ 
        console.log(`Player 1 wins this round!`);
//      player1.incrementScore();        
        for(let h = 0; h < this.playedCards.length; h++){
          this.newDeck.hand1.unshift(this.playedCards[h]);
        }
        this.clear();
      }
      else if(this.playedCards[0].value < this.playedCards[1].value){ 
        console.log(`Player 2 wins this round`);
 //     player2.incrementScore();       
        for(let i = 0; i < this.playedCards.length; i++){
          this.newDeck.hand2.unshift(this.playedCards[i]);
        }
        this.clear();
      }
      else if(this.playedCards[0].value == this.playedCards[1].value){  //if tie
        console.log(`Oh no, a tie!`);
        for(let t = 0; t < this.playedCards.length; t++){
          this.newDeck.hand1.unshift(this.playedCards[t]);
          this.newDeck.hand2.unshift(this.playedCards[t]);
        }
        this.clear();
      }
      console.log(`Player 1 has ${this.newDeck.hand1.length} card(s). Player 2 has ${this.newDeck.hand2.length} card(s).`); 
      this.clear();
      }
      else{
        if(this.newDeck.hand1.length > this.newDeck.hand2.length){
          console.log(`Player 1 Wins!`);
//          console.log(`Player 1 has ${this.newDeck.hand1.length} card(s).`); object literal score
        }
        else{
          console.log(`Player 2 Wins!`);
//          console.log(`Player 2 has ${this.newDeck.hand1.length} card(s).`); object literal score
        }
      }
    }

    clear(){
      this.playedCards = [];
    }

  playRound(){
    this.playCard();
    this.compareCards();
  }

  playGame(){
    while(this.newDeck.hand1.length > 20 && this.newDeck.hand2.length > 20 ){
      this.playRound();
      this.round++;
    }

    if(this.newDeck.hand1.length > this.newDeck.hand2.length){
      console.log(`Player 1 wins!`); //change to score
    }
    else if (this.newDeck.hand1.length < this.newDeck.hand2.length){
      console.log(`Player 2 wins!`); //change to score
    }
  }
    
    }

    let myBoard = new Board();
    myBoard.startBoard();
    console.log(myBoard.playGame());

/*
      class Player {
    constructor(name) {
        this.name = name;
        this.value = 0;
        this.hand = [];
    }
  }
  */

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

  create() {
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for(let a = 0; a < suits.length; a++) {
      for(let b = 0; b < ranks.length; b++) {
        this.cards.push( new Card(suits[a], ranks[b], values[b]));
      }
    }
  }

  //https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
  shuffle() {
    let c = this.cards.length;
    let e, d;

    while(c) {
      d = Math.floor(Math.random() * c--);
      e = this.cards[c];
      this.cards[c] = this.cards[d];
      this.cards[d] = e;
    }
    console.log('shuffled', this.cards);
    return this.cards;
  }
  
  dealCards() {
    this.hand1 = this.cards.slice(0,26);
    this.hand2 = this.cards.slice(26, 52);
  }
}

let deck = new Deck();
deck.create();
console.log('deck', deck.cards);

class Board {
  constructor() {
    this.newDeck = new Deck();
    this.playedCards = [];
    this.scorep1 = 0;
    this.scorep2 = 0;
    this.round = 1;
  }

  start() {
    this.newDeck.create();
    this.newDeck.shuffle();
    this.newDeck.dealCards();
  }

  playCard() {
    if (this.newDeck.hand1.length > 0 && this.newDeck.hand2.length > 0) {
      this.playedCards.push(this.newDeck.hand1.pop()); 
      this.playedCards.push(this.newDeck.hand2.pop()); 
      //return `Player 1 plays a ${this.playedCards[0].rank} of ${this.playedCards[0].suit}. Player 2 plays a ${this.playedCards[1].rank} of ${this.playedCards[1].suit}.`;
      console.log(`Player 1 plays a ${this.playedCards[0].rank} of ${this.playedCards[0].suit}. Player 2 plays a ${this.playedCards[1].rank} of ${this.playedCards[1].suit}.`);
    } else if (this.newDeck.hand1.length === 0) {
      for(let f = 0; f < this.playedCards.length; f++) {
        this.newDeck.hand2.unshift(this.playedCards[f]);
      }
    } else { //if(this.newDeck.hand2.length === 0)
      for(let g = 0; g < this.playedCards.length; g++) {
        this.newDeck.hand1.unshift(this.playedCards[g]);
      }
    }
  }

  compareCards(){
    if (this.playedCards.length > 0) {
      if (this.playedCards[0].value > this.playedCards[1].value) { 
        this.scorep1 += 1;
        //return `Player 1 wins this round!`;
        console.log(`Player 1 wins this round!`);
        for (let h = 0; h < this.playedCards.length; h++) {
          this.newDeck.hand1.unshift(this.playedCards[h]);
        }

        this.clear();
      } else if (this.playedCards[0].value < this.playedCards[1].value) { 
        this.scorep2 += 1;
        //return `Player 2 wins this round!`;
        console.log(`Player 2 wins this round!`);
        for (let i = 0; i < this.playedCards.length; i++){
          this.newDeck.hand2.unshift(this.playedCards[i]);
        }

        this.clear();
      } else {
        //return `Oh no, a tie!`;
        console.log(`Oh no, a tie!`);
        for (let t = 0; t < this.playedCards.length; t++){
          this.newDeck.hand1.unshift(this.playedCards[t]); //check logic is good here
          this.newDeck.hand2.unshift(this.playedCards[t]);
        }

        this.clear();
      }
      //return `Player 1 has ${this.newDeck.hand1.length} card(s) and ${this.scorep1} point(s). Player 2 has ${this.newDeck.hand2.length} card(s) and ${this.scorep2} point(s).`;
      console.log(`Player 1 has ${this.scorep1} point(s). Player 2 has ${this.scorep2} point(s).`); 
      this.clear();
    }
  }

  clear() {
    this.playedCards = [];
  }

  playRound() {
    this.playCard();
    this.compareCards();
  }

  playGame() {
    while(this.scorep1 < 30 && this.scorep2 < 30) {
      this.playRound();
      this.round++;
    }

    if (this.scorep1 > this.scorep2) {
      //return `Player 1 wins the game with ${this.scorep1} points!`;
      console.log(`Player 1 wins the game with ${this.scorep1} points!`);
    } else {//(this.scorep1 < this.scorep2)
      //return `Player 2 wins the game with ${this.scorep2} points!`;
      console.log(`Player 2 wins the game with ${this.scorep2} points!`);
    }
  }
}

let myBoard = new Board();
myBoard.start();
myBoard.playGame();
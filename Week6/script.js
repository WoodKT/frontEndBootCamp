class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    reset(){
        this.deck = [];

        const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let suit in suits) {
            for (let rank in ranks) {
              this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
          }
        }

          shuffle() {
            const { deck } = this;
            let m = deck.length, i;
        
            while(m){
              i = Math.floor(Math.random() * m--);
        
              [deck[m], deck[i]] = [deck[i], deck[m]];
            }
        
            return this;
          }
        
          deal(){
            return this.deck.pop();
          }
    }

const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset()
console.log(deck1.deck);

class Player {
    constructor(name) {
        this.playerName = name;
        this.score = 0;
        this.playerCards = [];
    }

    //MOCHA/CHAI testing
    getPlayerName() {
        return this.name;
    }

    //method to increment score
    incrementScore(){
        this.score += 1;
    }
}


/*
class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start() {
        this.players.push('');
        this.players.push('');
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
}

let gameBoard = new Board();
gameBoard.start();
//console.log(gameBoard.players);

*/






    // createDeck() {
    //     const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    //     const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    //     let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    //     for (let i = 0; i < suits.length; i++) {
    //         for (let j = 0; j < ranks.length; j++) {
    //             this.cards.push(new Card(suits[i], ranks[j], values[j]));
    //         }
    //     }
    // }


    // shuffleDeck() {
    //     let location1, location2, tmp;
    //     for (let i = 0; i < 1000; i++) {
    //         location1 = Math.floor((Math.random() * this.cards.length));
    //         tmp = this.cards[location1]; this.cards[location1] = this.cards[location2]; this.cards[location2] = tmp;
    //     }
    // }
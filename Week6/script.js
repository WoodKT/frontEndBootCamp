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
//        this.deal();
//        this.hand = [];
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
//            let cardsPerPerson = 26;
             let hand1 = this.deck.slice(0,26);
             let hand2 = this.deck.slice(26, 52);
             let hand = [];
             hand.push(hand1);
             hand.push(hand2);
            return hand;
          }
    }
  

const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset()
console.log(deck1.deck);

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
    
    addCards(decks){
      this.hand.push(decks);
    }

    playCard(){
      return this.hand.pop();
    }

    placeCard (card) {
      let totalSpaces = this.hand.length + 1
      let randomIndex = Math.floor(Math.random() * totalSpaces)
      this.hand.splice(randomIndex, 0, card)
    }

    createPlayer() {
      let name = prompt('Enter name for new player:');
      this.players.push(new Player(name));
  }

  /*
    //MOCHA/CHAI testing
    getPlayerName() {
        return this.name;
    }
    */
    //method to increment score
    incrementScore(){
        this.score += 1;
    }

}



class Board {
    constructor() {
        this.deck = new Deck();
        this.player1 = new Player(1);
        this.player2 = new Player(2);

        this.startBoard();
    }

    startBoard() {
      let hands = this.deck.deal();
      let hand1 = hands[0];
      let hand2 = hands[1];

      hand1.forEach((card) => {
        this.player1.addCards(card)
      })

      hand2.forEach((card) => {
        this.player2.addCards(card)
      })
    }

    boardRound(){
      let player1Card = this.player1.playCard();
      let player2Card = this.player2.playCard();

      console.log(`
      Player 1 plays ${player1Card.rank} of ${player1Card.suit}.
      Player 2 plays ${player2Card.rank} of ${player1Card.suit}.
    `)

    if (player1Card.value === player2Card.value) {
      if (this.player1.hand.length === 0) {
        console.log('Tie :(')
      } else {
        console.log('Tie :(')
        this.player1.placeCard(player1Card)
        this.player2.placeCard(player2Card)
      }
    } else if (player1Card.value === 1) {
      console.log('Player 1 wins point!')
      this.player1.incrementScore(1)
    } else if (player2Card.value === 1) {
      console.log('Player 2 wins point!')
      this.player2.incrementScore(1)
    } else if (player1Card.value > player2Card.value) {
      console.log('Player 1 wins point!')
      this.player1.incrementScore(1)
    } else if (player2Card.value > player1Card.value) {
      console.log('Player 2 wins point!')
      this.player2.incrementScore(1)
    }

    }
}

let board = new Board();
board.startBoard();







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

  */
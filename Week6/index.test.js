const expect = chai.expect;

describe('week6', function(){
    describe('#create', function(){
        it('should create deck of 52 cards', function(){
            const d = new Deck();
            d.create();
            expect(d.cards).length(52); 
        });
    });

    describe('#shuffle', function(){
        it('should shuffle the deck', function(){
            const d = new Deck();
            d.create();
            const s = d.shuffle();
            expect(d !== s);
        });
    });

    describe('#dealCards', function(){
        it('should deal two hands of 26 cards', function(){
            const d = new Deck();
            d.create();
            d.dealCards();
            expect(d.hand1 && d.hand2).length(26); 
        });
    });

    describe('#playGame', function(){
        it('should not exceed a score of 30', function(){
            let myBoard = new Board();
            myBoard.start();
            myBoard.playGame();
            expect(this.scorep1 <= 30 && this.scorep2 <= 30);
        });
    });
});
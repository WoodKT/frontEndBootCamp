var expect = chai.expect;

describe('week6', function(){
    describe('#createDeck', function(){
        it('create deck of 52 cards', function(){
            const d = new Deck();
            d.createDeck();
            expect(d.cards).length(52); 
        });
    });
});


describe('week6', function(){
    describe('#dealCards', function(){
        it('deal hand of 26 cards', function(){
            const d = new Deck();
            d.createDeck();
            d.dealCards();
            expect(d.hand1).length(26); 
        });
    });
});

describe('week6', function(){
    describe('#playGame', function(){
        it('score does not exceed 30', function(){
            let myBoard = new Board();
            myBoard.startBoard();
            myBoard.playGame();
            expect(this.scorep1 < 30 && this.scorep2 < 30);
        });
    });
});



        // it('throw error if not 52', function(){
        //     expect(function(){
        //         doSomething(2, 2);
        //     }).to.throw(Error);
        // });
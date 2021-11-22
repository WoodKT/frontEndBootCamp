var expect = chai.expect;

describe('week6', function(){
    describe('#createDeck', function(){
        it('create deck of 52', function(){
            const d = new Deck();
            d.createDeck();
            expect(d.cards).length(52); 
        });

        // it('throw error if not 52', function(){
        //     expect(function(){
        //         doSomething(2, 2);
        //     }).to.throw(Error);
        // });
    });
});
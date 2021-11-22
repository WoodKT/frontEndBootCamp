var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#doSomething', function(){
        it('concatenate parameters', function(){
            var x = doSomething('hi', 2);
            expect(x).to.equal('hi2');
        });

        it('throw error if first param not string', function(){
            expect(function(){
                doSomething(2, 2);
            }).to.throw(Error);
        });
    });
});
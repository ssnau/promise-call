var pcall = require('../');
var assert = require('assert');

function asyncGet(str, callback) {
    setTimeout(function() {
       callback(null, str.toUpperCase()); 
    }, 100);
}
function asyncError(callback) {
    setTimeout(function() {
       callback("error"); 
    }, 100);
}
var man = {
    name: 'john',
    asyncSpeak: function(person, callback) {
        var me = this;
        setTimeout(function(){
            callback(null, me.name + ' speak to ' + person);
        }, 100);
    }
};
describe('simple', function(){
    it('promise call with success', function(done) {
        pcall(asyncGet, 'jack')
            .then(function(ret){
                assert.equal(ret, 'JACK');
                done();
            });
    });

    it('promise call with error handling', function(done) {
        pcall(asyncError)
            .catch(function(error) {
                assert.equal(error, 'error');
                done();
            });
    });

    it('promise call with context', function(done) {
        pcall([man.asyncSpeak, man], 'mary')
            .then(function(word) {
                assert.equal('john speak to mary', word);
                done();
            });
    });
});

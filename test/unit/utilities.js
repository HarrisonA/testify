var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){

      expect(todo.util).to.have.property('trimTodoName');
      expect(todo.util).to.have.property('isValidTodoName');
      expect(todo.util).to.have.property('getUniqueId');


      expect(todo.util.trimTodoName).to.be.a("function");
      expect(todo.util.isValidTodoName).to.be.a("function");
      expect(todo.util.getUniqueId).to.be.a("function");

    });

    describe('trimTodoName', function(){
      
      it ('should only remove white spaces from the front and the back ', function (){
        expect(todo.util.trimTodoName(" burrito bling ")).to.equal("burrito bling");
      });

      it ('SHOULD return a string', function (){
        var nick = todo.util.trimTodoName(" burrito bling ");

        expect(nick).to.be.a('string');
        nick.should.be.a('string');
        assert.typeOf(nick,'string','nick is a string!');

      });

      it('make sure the length... this is like a useless test ... is correct',function(){
        var output = todo.util.trimTodoName(' what ever ');
        expect(output).to.have.length(9);
      });
      
    });

    describe('isValidTodoName', function(){

      it ('should reject single letter ToDo names', function (){
        expect(todo.util.isValidTodoName("a")).to.be.false;
      });

      it('should accept a ToDo name with at least 2 chars',function(){
        expect(todo.util.isValidTodoName("apple")).to.be.true;
        expect(todo.util.isValidTodoName("FU")).to.be.true;
      });
    });


    describe('getUniqueId', function(){

      it ('should not issue the same ID twice', function (){
        expect(todo.util.getUniqueId()).to.not.equal(todo.util.getUniqueId());
      });

      it('should return a number', function(){
        expect(todo.util.getUniqueId()).to.be.a("number");
      });
    });



  }); //end decribe the todo object

}); //end describe the todo.App

// describe('the todo.util methods', function() {
// });



// it('',function(){
//   expect();
// });
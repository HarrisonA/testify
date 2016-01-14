var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('API integration', function(){
  var server, setupStub, JSONresponse;

  
  before(function () {     // do the following BEFORE all tests are run
      server = sinon.fakeServer.create();   // create fake server
      
      sinon.stub(todo,"setup"); //stubbing setup so a new todo instance is not returned
      
      // xhr = sinon.useFakeXMLHttpRequest();  
      // requests = [];
      // xhr.onCreate = function (req) { requests.push(req); };
      
  });

  after(function () {   // cleanup after all the tests are run
      // Like before we must clean up when tampering with globals.
      server.restore(); 
      todo.setup.restore();
      // xhr.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
   
    JSONresponse = [{ name: 'Client-side unit tests',  done: true}];
    
    //console.log(JSON.stringify({todos: JSONresponse}));
    
    // server.respondWith("GET", "http://localhost:8000/todos", [
    // 200, {"Content-Type":"application/json"}, JSON.stringify({todos: JSONresponse})
    // ]);
    server.respondWith([200, {"Content-Type":"application/json"}, JSON.stringify({todos: JSONresponse})]);
    todo.init(false);
    //server.respondImmediately = true;
    server.respond();  

    // var sendStub = sinon.stub(todo.api,"sendRequest",function(){
    //   server.respond();
    // })


    // var setupStub = sinon.stub(todo,"setup");
    
    // sinon.stub(todo.api,"sendRequest",function(options,callback){
    //   console.log('fake sendRequest');
    //   var response = server.respond();  
    //   console.log(response);
    // })

    //expect(todoList).to.equal(JSONresponse);

    //setupStub.should.have.been.called;
    //server.respond();
    sinon.assert.calledWith(todo.setup,JSONresponse);
  });
});


// var todos = [{ name: 'Client-side unit tests',  done: true},{  name: 'End-to-end workflow tests',  done: true},{  name: 'Visual tests',  done: true},{  name: 'Continous integration',  done: true},{  name: 'Code coverage reporting',  done: true},{  name: 'Server-side unit tests',  done: false},{  name: 'Client-server integration tests',  done: false}];


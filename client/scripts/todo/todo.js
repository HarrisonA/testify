var todo = {
  setup: function(todos){
    console.log('real setup called');
    todo.app = new todo.App({
      el: '#todo-app',
      items: todos
    });
  },
  // Pass true to enable debug mode, which starts with no data from the server.
  init: function(debug) {
    console.log('Starting todo app...');
    // console.log(todo);

    todo.api.sendRequest({
      method: 'GET',
      endpoint: 'http://localhost:8000/todos'
    }, function(err, res){
      console.log('response back',err,res);
      
      if (err) { 
        console.log('error!',err);
        throw err; 
      }

      console.log('calling setup ',res);
      
      if (!debug) {
        todo.setup(res);
      } else {
        todo.setup();
      }
      console.log('back from setup');

    });
  }
};

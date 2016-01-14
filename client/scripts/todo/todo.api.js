/* globals todo, XMLHttpRequest */
todo.api = {
  sendRequest: function(options, callback){
    // create a new Ajax request
    var request = new XMLHttpRequest();
    request.open(options.method, options.endpoint, true);
    console.log('real send request');
    
    request.onload = function() {

      console.log('loading response', request);
      
      if (request.status >= 200 && request.status < 400){
        // Success!
        var data = JSON.parse(request.responseText);
        callback(null, data);
      } else {
        // We reached our target server, but it returned an error
        callback(request.responseText, null);
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      callback(new Error("sendRequest: Error requesting with options: " + options), null);
    };

    request.send();
  }
};


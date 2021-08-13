/*
Primary file for the API
*/

var server = require('./lib/server');
var workers = require('./lib/workers');
var cli = require('./lib/cli');

// Declare app = {};
var app = {};

// Init function
app.init = function(){
  // Start the server
  server.init();

  // Start the workers
  workers.init();

  // Start the CLI with a timeout
  setTimeout(function(){
    cli.init();
  },50);
  

};

// Execute
app.init();

// Export the app
module.exports = app;

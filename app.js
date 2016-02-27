// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
// Customer IDs
var customerIDs = ['56c66be5a73e49274150738c', '56c66be5a73e49274150738d', '56c66be5a73e49274150738e'];
var host = 'http://api.reimaginebanking.com'

var options = {
	host: host,
	path: 'branches?key='+API_KEY,
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
}
// Module dependencies.
var express = require('express');
var routes = require('./routes');
var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static('/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// var request = require('request');
// request(host+'customers?key='+API_KEY, function (error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	}
// })

// Routes

app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

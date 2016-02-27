// Module dependencies.
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var routes = require('./routes');
var app = module.exports = express.createServer();
//var names = [];


// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.urlencoded({ extended: false }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
var customerIDs = ['56c66be5a73e49274150738c', '56c66be5a73e49274150738d', '56c66be5a73e49274150738e'];
//var accountIDs = 
var host = 'http://api.reimaginebanking.com'

var customers = [] // fields: _id, last_name, address:{city, street_name, zip, state, street_number} first_name
var names = []
var purchases = []

request({
	url: host + '/customers/:id/accounts?key=' + API_KEY,
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
}, function(error, response, body) {
	if (error)
		return console.log('Error:', error);
	if (response.statusCode == 502)
		return console.log('Invalid Status Code:', response.statusCode, 'Bad Gateway');
	customers = body;
	console.log(customers);
});

// Routes
app.get('/', function(req, res){
	res.render('index', customers = customers);
});

app.post('/login',function(req,res){
  var firstname = req.body.first_name;
  var lastname = req.body.last_name;
  
  console.log("First name = "+firstname+", Last name is "+lastname+");
  res.end("yes");
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

// Module dependencies.
var express = require('express');
var request = require('request');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var routes = require('./routes');
var app = module.exports = express.createServer();

// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
var host = 'http://api.reimaginebanking.com';

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.register('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');
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

// customers fields: _id, last_name, address:{city, street_name, zip, state, street_number} first_name
var customer_id = ''; //customer ID of accounts, i.e. 56c66be5a73e49274150738c
var accounts = [];
var purchases = [];
var first_name = '';
var last_name = '';

//Request
request({
  url: host + '/customers?key=' + API_KEY,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
}, function(error, response, body) {
  if (error)
    return console.log('Error:', error);
  if (response.statusCode == 502)
    return console.log('Invalid Status Code:', response.statusCode, 'Bad Gateway');
  if (!first_name && !last_name)
    return console.log('Name of customer not inputed!');

});

request({
  url: host + '/customers/' + customer_id + '/accounts?key=' + API_KEY,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
}, function(error, response, body){
  if (error)
    return console.log('Error:', error);
  if (response.statusCode == 502)
    return console.log('Invalid Status Code:', response.statusCode, 'Bad Gateway');
  if (!customer_id)
    return console.log('Customer ID not retrieved!');
});

// request({
//   url: host + '/customers?key=' + API_KEY,
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
// }, function(error, response, body){
//   console.log(JSON.stringify(req.body))
// })

// Routes

app.post('/', function(req, res){
  first_name = 'Hayden'; //req.body.first_name;
  last_name = 'Panettiere'; //req.body.last_name;
  console.log('Hi', first_name, last_name);
  res.end("yes");
});

app.get('/', function(req, res){
  res.render('login.html');
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

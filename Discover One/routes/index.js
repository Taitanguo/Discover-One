var express = require('express');
var request = require('request');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
var host = 'http://api.reimaginebanking.com';
var first_name = '',
	last_name = '';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('/login');
});

router.get('/login', function(req, res) {
	res.render('login', { title: 'Discovery One' });
});

router.post('/login', function(req, res) {
	res.redirect('/map');
});

router.get('/map', function(req, res) {
	res.render('map', { title: 'Nearby Stores'});
});

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

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

router.post('/register', function(req, res) {
    Account.register(new Account({ _id : req.body.customer_id }), function(err, account) {
        if (err) {
            return res.render("register", {info: "Sorry, that customer ID does not exist. Try again."})
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/login');
        });
    });
});

module.exports = router;

// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
var customerIDs = ['56c66be5a73e49274150738c', '56c66be5a73e49274150738d', '56c66be5a73e49274150738e'];
var host = 'http://api.reimaginebanking.com'

var request = require('request');
var customers = [] // fields: _id, last_name, address:{city, street_name, zip, state, street_number} first_name
var purchases = []

request({
	url: host + '/customers?key=' + API_KEY,
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
});

exports.index = function(req, res){
	res.render('index', customers = customers);
};
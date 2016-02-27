// Reimagine API 
var API_KEY = '5694198d923e293641faeb5cfb3ab2de';
var customerIDs = ['56c66be5a73e49274150738c', '56c66be5a73e49274150738d', '56c66be5a73e49274150738e'];
var host = 'http://api.reimaginebanking.com'

var request = require('request');

// request({
// 	url: 'http://api.reimaginebanking.com/customers?key=5694198d923e293641faeb5cfb3ab2de',
// 	method: 'GET',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	}
// }, function(error, response, body) {
// 	if (error)
// 		return console.log('Error:', error);
// 	if (response.statusCode == 502)
// 		return console.log('Invalid Status Code:', response.statusCode, 'Bad Gateway');
// 	console.log(body);
// });

exports.index = function(req, res){
	res.render('index')
};
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

//Create new account
var Account = new Schema({
	_id: String
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);

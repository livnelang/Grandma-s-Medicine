var mongoose = require('mongoose');
var db = mongoose;

var dailytip_Schema = require('./dailytip_schema').tipSchema;
mongoose.model('tipM',dailytip_Schema);
var tipAction;

/*
* Make Ther Binding between Model & Mongoose Connection
*/
mongoose.connection.on('connected', function() {
	var Tips = db.model('tipM');

	var query = Tips.find();
	query.exec(function(err, docs) {
		tipAction = docs;
		console.log(err);
		return tipAction;
	});	
});


/**
* getRandomTip Function
* @return {string} - Random Daily Tip
*/
exports.getRandomTip = function() {
	var arr = tipAction;
	var rand = arr[Math.floor(Math.random() * arr.length)];
	return rand.tip;
};
var mongoose = require('mongoose');
var con = mongoose.connection.readyState;
console.log("ready state :" +con);
var db = mongoose;//.createConnection('mongodb://grandma:herbals@ds045242.mongolab.com:45242/grandma_db');

var problem_Schema = require('./problem_schema').problemSchema;
mongoose.model('problemM',problem_Schema);
var problemAction;

/*
* Make Ther Binding between Model & Mongoose Connection
*/
mongoose.connection.on('connected', function() {
	var Problems = db.model('problemM');

	var query = Problems.find();
	query.exec(function(err, docs) {
		problemAction = docs;
		console.log(err);
		return problemAction;
	});	
});

exports.getData = function(part) {
	var arr = problemAction;
	//console.log('after getdata: '+problemAction);
	// Filter By Part Name
	for (var i=0; i<=arr.length;i++) {
		if(part == arr[i].area) {
			return arr[i]; // Return The Specific Part
		}
	}

};
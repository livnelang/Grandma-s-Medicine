var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://grandma:herbals@ds045242.mongolab.com:45242/grandma_db');

var herbal_Schema = require('./herbal_schema').herbalSchema;
mongoose.model('herbalM',herbal_Schema);
var herbalAction;

/*
* Make Their Binding between Model & Mongoose Connection
*/
mongoose.connection.on('connected', function() {
	var Herbals = this.model('herbalM');

	var query = Herbals.find();
		query.exec(function(err, docs) {
		herbalAction = docs;
		return herbalAction;
	});	
});


/**
* getData Function
* Returns All Herbals Data
*/
exports.getData = function() {
	return herbalAction;
};


/**
* Returns Specific Herbal Data
* @param {string} - The Name Of Required Herbal
* @return {Object} - Required Herbal
*/
exports.getSpecificHerbal = function(herbal_name) {
	var arr = herbalAction;
	// Filter By Herbal Name
	for (var i=0; i<=arr.length;i++) {
		if(herbal_name == arr[i].title) {
			return arr[i]; // Return The Specific Part
		}
	}
};


/**
* Function To look up quality in aray of Strings
* Returns True/False
*/
function containsQuality(a, obj) {
	for(var i=0; i<a.length; i++) {
		if(a[i] == obj) {
			return true;
		}
	}
		return false;
}


/**
* Returns Herbals filtered by problem
* @param {string} - The Name Of Body Problem
* @return {Array} - Required Herbals
*/
exports.getFilteredHerbal = function(problem_name) {
	var arra = herbalAction;
	var results = [];
	// Filter By Problem Name
	for (var i=0; i<arra.length;i++) {
			if(containsQuality(arra[i].qualities, problem_name) == true ) {
				results.push(arra[i]);
			}
		}
		return results;		// Return array of herbal names with the problem
};

var mongoose = require('mongoose');
var schema = mongoose.Schema;

/**
* ProblemSchema Object
* Will Represent Our Problem Object
*/
var problemSchema = new schema( {
	area: String,
	issues: [String]  },
	{collection: 'problems' });

exports.problemSchema = problemSchema;
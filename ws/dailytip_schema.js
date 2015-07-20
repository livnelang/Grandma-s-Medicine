var mongoose = require('mongoose');
var schema = mongoose.Schema;

/**
* TipSchema Object
* Will Represent Our Daily Tip
*/
var tipSchema = new schema( {
	tip: String },
	{collection: 'daily_tips' });

exports.tipSchema = tipSchema;
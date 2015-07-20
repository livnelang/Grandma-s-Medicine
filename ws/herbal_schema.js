var mongoose = require('mongoose');
var schema = mongoose.Schema;

/**
* HerbalSchema Object
* Will Represent Our Herbal Object
*/
var herbalSchema = new schema( {
	title: {type:String, index:1,required:true,unique:true },
	imglink: String,
	qualities: [String],
	desc: String }, 
	{collection: 'herbals' });

exports.herbalSchema = herbalSchema;
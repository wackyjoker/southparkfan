var mongoose = require('mongoose');

var SouthSchema= new mongoose.Schema({
	name:String,
	amount:String,
	image:String,
	description:String,
	author:{
		id:{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String
	},
	comments:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Comment"

	}]
});

module.exports = mongoose.model('Southpark',SouthSchema);
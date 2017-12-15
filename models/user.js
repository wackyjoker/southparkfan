var mongoose = require("mongoose"),
	passportlocalmongoose	= require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username:String,
	passwort:String
});

UserSchema.plugin(passportlocalmongoose);

module.exports = mongoose.model("User",UserSchema);
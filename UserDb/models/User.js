const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSceama = new Schema({
	tcNo: {
		type: Number,
		required:true,
		unique: true
	},
	name : String,
	surname : String,
	age : Number,
	counter : String,
	note : [{not:String}],
	date : {
		type : Date,
		default : Date.now
	}
});
module.exports = mongoose.model('userlist',UserSceama);
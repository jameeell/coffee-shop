// import mongoose from modules
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//create a schema for Match(lingne 11)
const userSchema = mongoose.Schema({
    name: String,
    email: {type:String , unique: true},
    pwd: String,
    tel: String,
    image:String,
    role:String

});
userSchema.plugin(uniqueValidator);

//Match nom modele fel BD twali en miniscule et en pluriels matches
const user = mongoose.model('User', userSchema);
module.exports = user;
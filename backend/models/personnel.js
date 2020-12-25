// import mongoose from modules
const mongoose = require('mongoose');
//create a schema for Personnel
const personnelSchema = mongoose.Schema({
    name: String,
    role: String,
    tel: String,
    image: String

});
const personnel = mongoose.model('Personnel', personnelSchema);
module.exports = personnel;
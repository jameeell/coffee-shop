// import mongoose from modules
const mongoose = require('mongoose');
//create a schema for Menu
const menuSchema = mongoose.Schema({
    name: String,
    price: String,
    type: String,
    quantities: String,
    image: String

});

const menu = mongoose.model('Menu', menuSchema);
module.exports = menu;
// import mongoose from modules
const mongoose = require('mongoose');
//create a schema for reservation
const reservationSchema = mongoose.Schema({
    name: String,
    place: String,
    nbPersonnes: String,
    tel: String,
    date: String,
    time: String,
    note: String
    
});
const reservation = mongoose.model('Reservation', reservationSchema);
module.exports = reservation;
var mongoose = require('mongoose');
var uuid = require('uuid/v4')

var carsSchema = new mongoose.Schema({
    public_identifier: { type: String, default: uuid},
    model: { type: String },
    color: { type: String },
    price: { type: Number },
    creation_date: {type: Date, default: Date.now()}
}, { collection: "cars" });

var carModel = mongoose.model("Car", carsSchema);

module.exports = carModel;
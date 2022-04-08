var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    model: { type: String },
    color: { type: String },
    price: { type: Number }
}, { collection: "cars" });

var models = mongoose.model("carsSchema", schema);

module.exports = models;
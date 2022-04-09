const repository = require('../model/repository/model-repository');
const mongoose = require('mongoose');

var Car = mongoose.model('Car');

function saveCar(req) {
    var carCreateApi = req.body;
    
    if (carCreateApi === null) {
        console.log("Body is required");
        return;
    }

    var car = new Car({model: 'Golf', color: 'Blue', price: '2000'});

    repository.saveCar(car).then(
        car => console.log('Saved car:' + car.model),
        err => console.log('Error') 
    )

    return;
}

function findAll() {
    var cars = repository.findAll(Car);
    console.log(cars);
    return cars;
}
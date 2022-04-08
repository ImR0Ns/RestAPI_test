//modules
const express = require('express')
const port = 8080
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//mongoose_modules
var carsMod = require('./mongoose/schema')

//init app
const app = express()

//connect to mongodb
var url = 'mongodb://localhost:27017/mydb';
mongoose.connect(url);


app.use(bodyParser.json())


app.get('/', (req, res)=> {
    res.send('Cars API')
})

// read data
app.get('/cars', async (req,res)=>{
    var findCars = await carsMod.find({})
    res.send(findCars)
})

//create data
app.post('/cars', async (req, res)=>{
    var modelToInsert = req.body
    var insetDb = await carsMod.create(modelToInsert)

    res.send('Car added successfully')
})

//find data by id
app.get('/cars/:id', async (req, res)=> {
    var get_id = req.params
    if(get_id['id'].length != 24) res.send('Invalid id') 
    var findId = await carsMod.find({_id: get_id['id']})
    res.send(findId)
})

//update data
app.patch('/cars/:id', async (req, res)=> {
    var get_id = req.params
    var modelToUpdate = req.body
    if(get_id['id'].length != 24) res.send('Invalid id') 

    var updateIt = await carsMod.updateOne({_id: get_id['id']}, modelToUpdate)

    res.send(`The record with id ${get_id['id']} has been updated`)
})

//delete data
app.delete('/cars/:id', async (req, res)=> {
    var get_id = req.params
    if(get_id['id'].length != 24) res.send('Invalid id') 
    var delBYId = await carsMod.deleteOne({_id: get_id['id']})
    res.send(`Car with ${get_id['id']} has been deleted`)
})



app.listen(port, ()=>console.log(`Online on http://localhost:${port}`))
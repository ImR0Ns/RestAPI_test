function insert(model) {
    return await model.save();
}

function findAll(model) {
    return await model.find({});
} 
const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name:{type: String},
    Roll:{type: Number, required: true},
    Class:{type: String}
    
},{versionKey: false});

const studentsModel = mongoose.model('Students',DataSchema);

module.exports = studentsModel;
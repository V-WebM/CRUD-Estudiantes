const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    surname: {
        type:String,
        required:true
    },
    course: {
        type:String,
        required:true
    },
    record:{
        type:Number,
        required:true
    }
})

const Studentdb = mongoose.model('studentdb',schema);

module.exports = Studentdb;
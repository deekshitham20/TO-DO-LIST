const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TodoSchema = new Schema({
    text : {
        type : String
    },
    completed : {
        type : Boolean,
        default :false
    }
})
const todo = mongoose.model('Todo',TodoSchema)
module.exports = todo
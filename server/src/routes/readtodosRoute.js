//should be able to send GET request only if they are an authorized user

const ToDoModel = require('../models/ToDoModel')

module.exports = async(req,res) => {
    const todos = await ToDoModel.find()
    res.send(todos)
}
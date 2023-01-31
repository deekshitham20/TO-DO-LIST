const ToDoModel = require('../models/ToDoModel')
module.exports = async(req,res) => {
    const {id} = req.params
    const todo =  await ToDoModel.findById(id)
    todo.completed = req.body.completed
    todo.text = req.body.text
    await todo.save()
    res.json(todo)
}
const ToDoModel = require('../models/ToDoModel')
module.exports = async(req,res) => {
    const {id} = req.params
    const todo =  await ToDoModel.findById(id)
    await todo.remove()
    res.json(todo)
}
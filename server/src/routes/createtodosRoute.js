const ToDoModel = require('../models/ToDoModel')
module.exports = async(req,res) => {
const {text} = req.body
const list = new ToDoModel({text})
const newlist = await list.save()
res.json(newlist)
}
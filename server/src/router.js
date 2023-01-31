const express = require('express')
const router = express.Router()
const isLoggedIn = require('./middleware/isLoggedIn')
/*router.post('/login',(req,res)=>{
    res.send("hello")
})*/

router.post('/login',require('./routes/loginRoute'))
//inserting data - post
router.post('/todos',isLoggedIn,require('./routes/createtodosRoute'))
router.get('/todos',isLoggedIn,require('./routes/readtodosRoute'))
router.put('/todos/:id',isLoggedIn,require('./routes/updatetodosRoute'))
router.delete('/todos/:id',isLoggedIn,require('./routes/deletetodosRoute'))
module.exports = router
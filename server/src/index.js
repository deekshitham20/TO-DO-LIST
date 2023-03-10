const express = require('express')
const app = express()
const dotenv =require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
//const morgan = require('morgan')
//app.use(morgan('tiny))
const cors = require('cors')
app.use(cors())
app.use(express.json())
const router = require('./router')
app.use(router)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("starting on port 3000")
})
app.listen(3000)
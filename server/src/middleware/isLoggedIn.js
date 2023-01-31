const jwt = require("jsonwebtoken")

module.exports = (req,res,next) =>{
    const auth = req.headers.authorization
    if(!auth)
    {
        res.send("invalid cred")
    }
    else{
        const token = auth.split(' ')[1]
        //console.log(token)
    jwt.verify(token,process.env.SECRET,(err,decoded) =>{
        if(err)
           res.send("invalid credi")
        else
         next()   
    })
}
}
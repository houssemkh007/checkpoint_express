const express = require('express')
const app = express()
const PORT = 5000


const  time_verify=(req,res,next)=> {
    let date=new Date()
    let day = date.getDay()
    let hour = date.getHours()
    if(day>5||hour>17||hour<11)
    {
        res.send('we are closed')
    }
    else{
        next()
    }
}
app.use(time_verify,express.static(__dirname+'/public'))
app.listen(PORT,err=>err?console.log(err):console.log(`server is running on port ${PORT}`))

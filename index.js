const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const db=require('./config/mongoose')
const passport=require('passport')
const passportJWT=require('./config/passportJWT')


app.use(express.urlencoded())
app.use(bodyParser.json())
app.use('/',require('./routes'))

const port=8000
app.listen(port,function(err){
    if(err){console.log("Error in running Server")}
    console.log("Server is running at port : ",port)
})
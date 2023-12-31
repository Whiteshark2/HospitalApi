const mongoose=require('mongoose')
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email should be unique"]
    },
    password:{
        type:String,
        required:true,
    }
})

const Doctor=mongoose.model("Doctor",doctorSchema)

module.exports=Doctor
const Doctor=require('../models/doctor')
const jwt=require('jsonwebtoken')

module.exports.create=async function(req,res){
    try {
        const doctor=await Doctor.create(req.body)
        res.status(200).json({
            success:true,
            message:"doctor created ",
            data:doctor
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in creating  doctor",


        })
    }
}

module.exports.createSession=async function(req,res){
    try {
        let doctor=await Doctor.findOne({email:req.body.email})
        if(!doctor||doctor.password!=req.body.password){
            return res.json(422,{
                message:"Invalid user /password"
            })
        }
        return res.json(200,{
            message:"Sign in successful,here is your token ,please keep it safe!",
            data:{
                token:jwt.sign(doctor.toJSON(),'hospitalApi',{expiresIn:'500000'})
            }
        })
        
    } catch (error) {
        return res.staus(422).json({
            message:"Invalid user /password"
        })
    }
}
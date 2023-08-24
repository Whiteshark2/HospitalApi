const Patient=require('../models/patient')
const Doctor=require('../models/doctor')

module.exports.create=async function(req,res){
    try {
        req.body.doctor="64e4ebd87e34c166cd128cd0"
        const patient=await Patient.create(req.body)
        return res.status(200).json({
            success:true,
            message:"patient created sucessfully",
            data:patient
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Error in creating patient"
        })
    }
}


module.exports.createReport=async function(req,res){
    try {
        const patient= await Patient.findById(req.params.id)
        req.body.date=Date.now();
        const report=await patient.reports.push(req.body)
        patient.save()
        return res.status(200).json({
            success:true,
            message:"report created successfully",
            data:report
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"could created report"
        })
    }
}

module.exports.getReport=async function(req,res){
    try {
        const patient=await Patient.findById(req.params.id)
        return res.status(200).json({
            success:true,
            reports:patient.reports
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"could not fetch reports"
        })
        
    }
}

module.exports.getReportonStatus=async function(req,res){
    try {
        const patient=await Patient.find({
            'reports.status': 'Negative'
          })
        return res.status(200).json({
            success:true,
            reports:patient

        })
        
        
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:"could fetch/find reports"
        })
    }
}
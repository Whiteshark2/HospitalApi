const express=require('express')
const router=express.Router()
const patientController=require('../controllers/patient')
const passport = require('passport')


router.post('/create',passport.authenticate('jwt',{session:false}),patientController.create)
router.post('/create_reports/:id',passport.authenticate('jwt',{session:false}),patientController.createReport)
router.get('/get-reports/:id',patientController.getReport)

router.get('/all-reports/:status',patientController.getReportonStatus)




module.exports=router
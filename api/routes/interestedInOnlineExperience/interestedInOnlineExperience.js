const express = require('express');
const router = express.Router();
const interestedInOnlineExperience = require('../../models/interestedInOnlineExperience');

router.post('/', (req, res) => {
    interestedInOnlineExperience.create({
        createdBy: req.user.id,
        interestedInPersonName: req.user.firstName,
        interestedInPersonEmail: req.user.email,
        onlineExperienceHostEmail: req.body.onlineExperienceHostEmail,
        onlineExperienceNumber: req.body.onlineExperienceNumber,
        onlineExperienceType: req.body.onlineExperienceType,
        onlineExperienceDate: req.body.onlineExperienceDate,
        onlineExperienceStartTime: req.body.onlineExperienceStartTime,
        onlineExperienceEndTime: req.body.onlineExperienceEndTime,
        onlineExperienceLink:req.body.onlineExperienceLink
    }, (err, interestedInOnlineExperience) => {
        if (err) {
            console.log(err)
            res.json({
                data: null,
                authorized: false,
                message: "Can't add online experience",
                success: false
            })
        }
        else {
            res.json({
                data: interestedInOnlineExperience,
                authorized: true,
                message: "we added online experience",
                success: true
            })
        }
    }
    )
})

router.get("/interestedIn/:id",(req,res)=>{
    let id=req.params.id;
    interestedInOnlineExperience.find({onlineExperienceNumber:id},(err,interestedInOnlineExperience)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get interested online experience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:interestedInOnlineExperience,
                authorized:true,
                message:"got your interested online experience",
                success:true
            })        
        }
    
    })

})


router.get("/user/onlineExperiences",(req,res)=>{
    interestedInOnlineExperience.find({createdBy:req.user.id},(err,interestedInOnlineExperience)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get interested in online experience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:interestedInOnlineExperience,
                authorized:true,
                message:"got your interested in online experience",
                success:true
            })        
        }
    
    })

})




router.get("/allOnlineExperiences",(req,res)=>{
    interestedInOnlineExperience.find({},(err,interestedInOnlineExperience)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get interested in online experience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:interestedInOnlineExperience,
                authorized:true,
                message:"got your interested in online experience",
                success:true
            })        
        }
    
    })

})

router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    interestedInOnlineExperience.findOneAndDelete({interestedInID:id},(err,interestedInOnlineExperience)=>{
        if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't delete  your online experience",
                    success:false
                })
            }
            else
            {
            res.json({
                data:interestedInOnlineExperience,
                authorized:true,
                message:"we deleted your online experience",
                success:true
            })}
    })


})
module.exports=router;
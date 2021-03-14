const express = require('express');
const router = express.Router();
const Reserve = require('../../models/reserveExperience');


router.post('/', (req, res) => {
    Reserve.create({
        country: req.body.country,
        city: req.body.city,
        apartmentNumber: req.body.apartmentNumber,
        street:req.body.street,
        createdBy: req.user.id,
        clientName: req.user.firstName,
        clientEmail: req.user.email,
        experienceLocation: req.body.experienceLocation,
        experiencePrice: req.body.experiencePrice,
        // experienceDuration: req.body.experienceDuration,
        experienceHostEmail: req.body.experienceHostEmail,
        experienceNumber: req.body.experienceNumber,
        typeOfExperience: req.body.typeOfExperience,

    }, (err, experienceReserved) => {
        if (err) {
            console.log(err)
            res.json({
                data: null,
                authorized: false,
                message: "Can't add address",
                success: false
            })
        }
        else {
            res.json({
                data: experienceReserved,
                authorized: true,
                message: "we added address",
                success: true
            })
        }
    }
    )
})

// to get all user experience for specific user
router.get("/reservedExperience",(req,res)=>{
    Reserve.find({createdBy:req.user.id},(err,exp)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get reserved experience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:exp,
                authorized:true,
                message:"got your reservation",
                success:true
            })        
        }
    
    })

})

//delete reservation
router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    Reserve.findOneAndDelete({reserveID:id},(err,exp)=>{
        if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't delete  your data",
                    success:false
                })
            }
            else
            {
            res.json({
                data:exp,
                authorized:true,
                message:"we deleted your data :P",
                success:true
            })}
    })


})


//get object who reserved the experience
router.get("/:id",(req,res)=>{
    let id=req.params.id;
    Reserve.find({experienceNumber:id},(err,exp)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get experience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:exp,
                authorized:true,
                message:"got your experience",
                success:true
            })        
        }
    
    })

})


module.exports = router;
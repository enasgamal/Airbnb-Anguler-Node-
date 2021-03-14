const express = require('express');
const router = express.Router();
const Place =require('../../models/place')

router.post('/',(req,res)=>{
    console.log(req.body)
    Place.create({
        country:req.body.country,
        city:req.body.city,
        street:req.body.street,
        apartmentNumber:req.body.apartmentNumber,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        createdBy:req.user.id,
        clientName:req.user.firstName,
        clientEmail:req.user.email,
        tripLocation:req.body.tripLocation,
        tripPrice:req.body.tripPrice,
        tripNights:req.body.tripNights,
        tripHostEmail:req.body.tripHostEmail,
        tripNumber:req.body.tripNumber,
        // hostedBy:req.params.id
    },(err,place)=>{
        console.log(err)
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't add address",
                success:false
            })
        }else{
            res.json({
                data:place,
                authorized:true,
                message:'Successfully added address',
                success:true
            })
        }
    })
});

//to get trips for specific user
router.get('/trips',(req,res)=>{
    Place.find({createdBy:req.user.id},(err,place)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't get your trips",
                success:false
            })
        }else{
            res.json({
                data:place,
                message:"Successufully get your trips",
                success:true
            })
        }
    })
});

//to get specific trip in my profile (placeID is unique for each reservation)
router.get('/:id',(req,res)=>{
    let id =req.params.id
    Place.findOne({placeID:id},(err,place)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't get your address",
                success:false
            })
        }else{
            res.json({
                data:place,
                message:"Successufully get your address",
                success:true
            })
        }
    })
});


//to get all users who reserved for specific trip
router.get('/reservedTrips/:id',(req,res)=>{
    let id =req.params.id
    Place.find({tripNumber:id},(err,place)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't get your address",
                success:false
            })
        }else{
            res.json({
                data:place,
                message:"Successufully get your address",
                success:true
            })
        }
    })
});


router.delete('/:id',(req,res)=>{
    let id=req.params.id
    Place.findOneAndDelete({placeID:id},(err,place)=>{
        if(err){
            res.json({
                data:null,
                message:" not Deleted",
                success:false
            })
        }else{
            res.json({
                data:place,
                message:" Successfully Deleted",
                success:true
            })
        }
    })
})

module.exports=router
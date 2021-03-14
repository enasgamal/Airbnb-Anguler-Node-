const express = require('express');
const router = express.Router();
const Review =require('../../models/place-review');

router.post('/',(req,res)=>{
    Review.create({
        comment:req.body.comment,
        createdBy:req.user.id,
        clientFirstName:req.user.firstName,
        clientLastName:req.user.lastName,
        clientEmail:req.user.email,
        placeNumber:req.body.placeNumber
    },(err,review)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't post your review",
                success:false
            })
        }else{
            res.json({
                data:review,
                message:"post your review",
                success:true
            })
        }
    })
});

router.get('/:id',(req,res)=>{
    let id=req.params.id
    Review.find({placeNumber:id},(err,review)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't find your reviews",
                success:false
            })
        }else{
            res.json({
                data:review,
                message:"successfully find your review",
                success:true
            })
        }
    })
});

router.delete('/:id',(req,res)=>{
    let id=req.params.id
    Review.findOneAndDelete({reviewID:id},(err,review)=>{
        if(err){
            res.json({
                data:null,
                message:"Can't delete your review",
                success:false
            })
        }else{
            res.json({
                data:review,
                message:"successfully deleted your review",
                success:true
            })
        }
    })
})

module.exports=router
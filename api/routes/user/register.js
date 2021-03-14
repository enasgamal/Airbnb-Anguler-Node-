const jwt=require('jsonwebtoken');
const {SECRET_KEY} = require('../../config');
const express=require('express');
const router= express.Router();
const User=require('../../models/user');



const bcrypt=require('bcrypt');
const saltRounds = 10;

router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        if(!err){
            res.status(200).json({
                data:users,
                message:"Successfully get data",
                success:true
            })
        }else{
            res.status(404).json({
                message:"error"
            })
        }
    })
});


router.get('/:id',(req,res)=>{
    let id=req.params.id;
    User.findOne({userID:id},(err,user)=>{
        if(!err){
            res.json({
                data:user,
                message:"Successfully get data",
                success:true
            });
        }else{
            res.status(404).json({message:"errror"})
        }
    })
})

router.post('/',(req,res)=>{
    // console.log(req.body)
    bcrypt.hash(req.body.Password, saltRounds, function(err, hash) {
            email=req.body.Email;
            // console.log(email)
        User.findOne({email:email},(err,user)=>{
            // console.log(user)
            if(user){
                 res.json({
                    data:null,
                    authorized:false,
                    message:"not authorized, email invalid/password",
                    success:false
                })
            }else{
                User.create({
                    firstName:req.body.FirstName,
                    lastName:req.body.LastName,
                    email:req.body.Email,
                    password:hash,
                    mobile:req.body.Mobile,
                    age:req.body.Age,
                    gender:req.body.Gender,
                    // userImage:req.file.path
                },(err,user)=>{
                    if(err){
                        res.json({
                            data:err,
                            message:"Invalid data ",
                            success:false
                        })
                    }else{
                        res.json({
                            data:user,
                            authorized:true,
                            message:"successfully register",
                            success:true
                        });
                    }
                })
            }
        })
    });
});
// getSignedToken= user=>{
//     return jwt.sign({
//         firstName:user.firstName,
//         lastName:user.lastName,
//         email:user.email,
//         password:user.password,
//         mobile:user.mobile,
//         age:user.age,
//         gender:user.gender,
//         userImage:user.userImage
//     },SECRET_KEY,{expiresIn:'1h'})
// }

module.exports=router;
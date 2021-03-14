const jwt=require('jsonwebtoken');
const {SECRET_KEY} = require('../../config')
const express=require('express');
const router= express.Router();
const User=require('../../models/user');
const bcrypt=require('bcrypt');
const saltRounds = 10;

router.post('/',async (req,res)=>{
    const email=req.body.Email;
    const password=req.body.Password;
    const user =await User.findOne({email:req.body.Email},(err,user)=>{
        // console.log(req.body)
        if(!user){
            res.json({
                data:null,
                authorized:false,
                message:"invalid email/password",
                success:false
            })
         }else{
            bcrypt.compare(req.body.Password,user.password,(err,result)=>{
                if(result===true){
                    const token=getSignedToken(user)
                    console.log(token)
                    res.json({
                        data:user,
                        authorized:true,
                        message:"successfully login",
                        success:true,
                        token:token
                    })
                }else{
                    res.json({
                        data:null,
                        authorized:false,
                        message:"Can't login, invalid email/password",
                        success:false
                    })
                }
            })
        }
    })
});
getSignedToken= user=>{
    return jwt.sign({
        id:user._id,
        userID:user.userID,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        mobile:user.mobile,
        age:user.age,
        gender:user.gender,
    },SECRET_KEY)
}

module.exports=router;
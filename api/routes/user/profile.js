const express= require('express');
const router=express.Router();
const User =require('../../models/user');
//multer
const multer  = require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname)
    }
});
const upload=multer({storage:storage});


//require auth ,then routrt.get('/',auth,(req,res))
router.get('/',(req,res)=>{
    // const currentUserID=auth(req);
    // console.log(currentUserID)
    // console.log(req.user)
    User.findOne({userID:req.user.userID},(err,user)=>{
        if(!err){
            res.json({
                data:user,
                authorized:true,
                message:"successfully find user",
                success:true,
            })
        }else{
            res.json({
                data:null,
                authorized:false,
                message:"Can't find user",
                success:false
            })
        }
    })
});
// uploading photo
router.put('/photo/:id',upload.single('userImage'),(req,res)=>{
    let id =req.params.id
    console.log(id)
    console.log(req.file)
    let fileUrl = req.file.path.replace(/\\/g, "").substring(`uploads`.length)
    console.log(fileUrl)
    User.findOneAndUpdate({userID:id},{userImage:fileUrl},{new:true},(err,image)=>{
        if(!err){
            res.json({
                data:image,
                message:"Successfully uploaded image",
                success:true
                
            })
        }else{
            res.json({
                message:"Can't upload image",
                success:false
            })
        }
    })
    
});
router.put('/:id',(req,res)=>{
    let id =req.params.id
    console.log(id)
   User.findOneAndUpdate({userID:id},req.body,(err,user)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update user",
                success:false,
            })
        }else{
            res.json({
                data:user,
                authorized:true,
                message:"successfully updated student",
                success:true
            })
        }
    })
})

module.exports=router;
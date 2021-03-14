const express = require('express');
const router = express.Router();
const Host=require('../../models/host');
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

router.put('/photo/:id',upload.single('hostImage'),(req,res)=>{
    let id =req.params.id
    console.log(id)
    let fileUrl = req.file.path.replace(/\\/g, "").substring(`uploads`.length)
    console.log(fileUrl)
   Host.findOneAndUpdate({hostID:id},{hostImage:fileUrl},{new:true},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update your image",
                success:false,
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"successfully updated your image",
                success:true
            })
        }
    })
});

router.post('/',(req,res)=>{
    // console.log(req.user)
    Host.create({
        address:req.body.address,
        propertyType:req.body.propertyType,
        numberOfGuests:req.body.numberOfGuests,
        numberOfBedrooms:req.body.numberOfBedrooms,
        numberOfBathrooms:req.body.numberOfBathrooms,
        totalPrice:req.body.totalPrice,
        activities:req.body.activities,
        description:req.body.description,
        createdBy:req.user.id,
        hostName:req.user.firstName,
        hostEmail:req.user.email,
        hostStatus:"Pending",
    },(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't add hosting",
                success:false
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:'Successfully added hosting',
                success:true
            })
        }
    })
});

//get hosts for user
router.get('/hostUser',(req,res)=>{
    Host.find({createdBy:req.user.id},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:'can not get data',
                success:false
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"Successfully get data",
                success:true
            })
        }
    })
})
//get hosts for all users
router.get('/allHosts',(req,res)=>{
    Host.find({},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:'can not get data',
                success:false
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"Successfully get data",
                success:true
            })
        }
    })
});
//edit
router.put('/:id',(req,res)=>{
    let id =req.params.id
    // console.log(id)
   Host.findOneAndUpdate({hostID:id},req.body,{new:true},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update your host",
                success:false,
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"successfully updated your host",
                success:true
            })
        }
    })
});
router.delete('/:id',(req,res)=>{
    let id =req.params.id
    // console.log(id)
   Host.findOneAndDelete({hostID:id},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't delete your host",
                success:false,
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"successfully delete your host",
                success:true
            })
        }
    })
});
//get data by id
router.get('/:id',(req,res)=>{
    let id=req.params.id
    Host.findOne({hostID:id},(err,host)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:'can not get data',
                success:false
            })
        }else{
            res.json({
                data:host,
                authorized:true,
                message:"Successfully get data",
                success:true
            })
        }
    })
});

module.exports=router;

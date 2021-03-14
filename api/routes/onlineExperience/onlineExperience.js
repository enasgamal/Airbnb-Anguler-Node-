const express = require('express');
const router = express.Router();
const onlineExperience=require('../../models/onlineExperience');
const multer  = require('multer');
const { json } = require('body-parser');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'_'+file.originalname)
    }
});
const upload=multer({storage:storage});

//upload photo
router.put('/photo/:id',upload.single('onlineExperienceImage'),(req,res)=>{
    let id =req.params.id
    console.log(id)
    let fileUrl = req.file.path.replace(/\\/g, "").substring(`uploads`.length)
    console.log(fileUrl)
    onlineExperience.findOneAndUpdate({onlineExperienceID:id},{onlineExperienceImage:fileUrl},{new:true},(err,onlineExperience)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update your image",
                success:false,

            })
        }else{
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"successfully updated your image",
                success:true
            })
        }
    })
});

//make onlineExperience
router.post('/',(req,res)=>{
    onlineExperience.create({
        onlineExperienceDescription:req.body.onlineExperienceDescription,
        onlineExperienceType:req.body.onlineExperienceType,
        onlineExperienceLanguage:req.body.onlineExperienceLanguage,
        onlineExperienceLink:req.body.onlineExperienceLink,
        onlineExperienceDate:req.body.onlineExperienceDate,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        createdBy:req.user.id,
        hostName:req.user.firstName,
        hostEmail:req.user.email,
        onlineExperienceStatus:"Pending",
    },(err,onlineExperience)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't add onlineExperience",
                success:false
            })
        }else{
            res.json({
                data:onlineExperience,
                authorized:true,
                message:'Successfully added onlineExperience',
                success:true
            })
        }
    })
});

//get all user onlineExperience
router.get("/userOnlineExperience",(req,res)=>{
    onlineExperience.find({createdBy:req.user.id},(err,onlineExperience)=>{
        if(err)
        {
            res.json({
                data:null,
                authorized:false,
                message:"Can't get any onlineExperience",
                success:false

            })
        }
        else 
        {
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"we got your onlineExperiences",
                success:true
            })        
        }
    
    })

})


//get all onlineExperience
router.get('/allOnlineExperiences',(req,res)=>{
    onlineExperience.find({},(err,onlineExperience)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"can't get any onlineExperience",
                success:false
            })
        }else{
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"Successfully get onlineExperiences",
                success:true
            })
        }
    })
});


//edit specific onlineExperience
router.put("/:id",(req,res)=>{
    let id=req.params.id;
    onlineExperience.findOneAndUpdate({onlineExperienceID:id},req.body,{new:true},
        (err,onlineExperience)=>{
            if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't update your onlineExperience",
                    success:false
                })
            }
            else
            {
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"we updated your onlineExperience",
                success:true
            })}


        })
})

//get specific onlineExperience
router.get("/:id",(req,res)=>{
    let id=req.params.id;
    onlineExperience.findOne({onlineExperienceID:id},(err,onlineExperience)=>{
        if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't get your onlineExperience",
                    success:false
                })
            }
            else
            {
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"we got your onlineExperience",
                success:true
            })}
    })
})

//delete specific onlineExperience
router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    onlineExperience.findOneAndDelete({onlineExperienceID:id},(err,onlineExperience)=>{
        if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't delete  your onlineExperience",
                    success:false
                })
            }
            else
            {
            res.json({
                data:onlineExperience,
                authorized:true,
                message:"we deleted your onlineExperience",
                success:true
            })}
    })


})

module.exports=router;
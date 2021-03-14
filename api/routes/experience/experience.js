const express = require('express');
const router = express.Router();
const Exp=require('../../models/experience')
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


router.put('/photo/:id',upload.single('placeImage'),(req,res)=>{
    let id =req.params.id
    console.log(id)
    let fileUrl = req.file.path.replace(/\\/g, "").substring(`uploads`.length)
    console.log(fileUrl)
   Exp.findOneAndUpdate({experienceID:id},{placeImage:fileUrl},{new:true},(err,experience)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't update your image",
                success:false,

            })
        }else{
            res.json({
                data:experience,
                authorized:true,
                message:"successfully updated your image",
                success:true
            })
        }
    })
});

//to make my experience
router.post('/',(req,res)=>{
    Exp.create({
        place:req.body.place,
        typeOfExperience:req.body.typeOfExperience,
        description:req.body.description,
        transportation:req.body.transportation,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        totalPrice:req.body.totalPrice,
        language:req.body.language,
        pets:req.body.pets,
        catering:req.body.catering,
        capacity:req.body.capacity,
        createdBy:req.user.id,
        hostName:req.user.firstName,
        hostEmail:req.user.email,
        experienceStatus:"Pending",
    },(err,exp)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:"Can't add experience",
                success:false
            })
        }else{
            res.json({
                data:exp,
                authorized:true,
                message:'Successfully added experience',
                success:true
            })
        }
    })
});

// to get all user experience for specific user
router.get("/userExp",(req,res)=>{
    Exp.find({createdBy:req.user.id},(err,exp)=>{
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

router.get('/allExperiences',(req,res)=>{
    Exp.find({},(err,experience)=>{
        if(err){
            res.json({
                data:null,
                authorized:false,
                message:'can not get data',
                success:false
            })
        }else{
            res.json({
                data:experience,
                authorized:true,
                message:"Successfully get data",
                success:true
            })
        }
    })
});


router.put("/:id",(req,res)=>{
    let id=req.params.id;
    Exp.findOneAndUpdate({experienceID:id},req.body,{new:true},
        (err,exp)=>{
            if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't update your data",
                    success:false
                })
            }
            else
            {
            res.json({
                data:exp,
                authorized:true,
                message:"we updated your data",
                success:true
            })}


        })
})

router.get("/:id",(req,res)=>{
    let id=req.params.id;
    Exp.findOne({experienceID:id},(err,exp)=>{
        if(err)
            {
                res.json({
                    data:null,
                    authorized:false,
                    message:"can't get your data",
                    success:false
                })
            }
            else
            {
            res.json({
                data:exp,
                authorized:true,
                message:"we got your data :D",
                success:true
            })}
    })
})

router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    Exp.findOneAndDelete({experienceID:id},(err,exp)=>{
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

module.exports=router;
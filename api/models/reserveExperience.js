const mongoose =require('mongoose');
//  const Exp = require('../models/experience')
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);


let reserveExperienceSchema= new mongoose.Schema({
    reserveID:{
        type:String
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    apartmentNumber:{
        type:Number,
        required:true
    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User' },
    clientName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    experienceLocation:{
        type:String
    },
    experiencePrice:{
        type:String
    },
    experienceDuration:{
        type:String
    },
    experienceHostEmail:{
        type:String
    },
    experienceNumber:{
        type:Number
    },
    typeOfExperience:{
        type:String
    }
    // experienceDetails:
    // { type:mongoose.SchemaTypes.ObjectId, ref: 'Experience' }
});
reserveExperienceSchema.plugin(autoIncrement.plugin,{
    model:'ExperienceReserve',
    field:'reserveID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('ExperienceReserve', reserveExperienceSchema)
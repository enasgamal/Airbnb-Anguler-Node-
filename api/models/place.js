// const { text } = require('body-parser');
const mongoose =require('mongoose');
// const User = require('../models/user')
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let placeSchema= new mongoose.Schema({
    placeID:{
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
    startDate:{
        type:Date,
        required:true

    },
    endDate:{
        type:Date,
        required:true

    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User'
    },
    clientName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    tripLocation:{
        type:String
    },
    tripPrice:{
        type:String
    },
    tripNights:{
        type:String
    },
    tripHostEmail:{
        type:String
    },
    tripNumber:{
        type:Number
    },
    
    // trip:
    //     { type:mongoose.SchemaTypes.ObjectId, ref: 'Host' }
});
placeSchema.plugin(autoIncrement.plugin,{
    model:'Place',
    field:'placeID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('Place', placeSchema)
const mongoose =require('mongoose');
// const User = require('../models/user')
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let reviewSchema = new mongoose.Schema({
    reviewID:{
        type:Number
    },
    comment:{
        type:String,
        required:true,
    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User'
    },
    clientFirstName:{
        type:String
    },
    clientLastName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    placeNumber:{
        type:Number
    }
});
reviewSchema.plugin(autoIncrement.plugin,{
    model:'Review',
    field:'reviewID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('Review', reviewSchema)
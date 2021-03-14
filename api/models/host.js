const mongoose =require('mongoose');
// const User = require('../models/user')
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let hostSchema= new mongoose.Schema({
    hostID:{
        type:Number
    },
    address:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    numberOfGuests:{
        type:String,
        required:true
    },
    numberOfBedrooms:{
        type:String,
        required:true
    },
    numberOfBathrooms:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    },
    activities:{
        type:[{
            type:String
        }]
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User'
    },
    hostStatus:{
        type:String,
        enum : ['Approve','Decline','Pending'],
        default: 'Pending'
    },
    hostName:{
        type:String
    },
    hostEmail:{
        type:String
    },
    hostImage:{
        type:String
    }

});
hostSchema.plugin(autoIncrement.plugin,{
    model:'Host',
    field:'hostID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('Host', hostSchema)
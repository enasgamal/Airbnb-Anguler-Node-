const mongoose =require('mongoose');
// const User = require('../models/user')
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let experienceSchema= new mongoose.Schema({
    experienceID:{
        type:Number
    },
    place:{
        type:String,
        required:true
    },
    typeOfExperience:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },  
    capacity:{
        type:Number,
        required:true
    }, 
    transportation:{
        type:String,
        required:true
    },  
    pets:{
        type:String,
        required:true
    }, 
    language:{
        type:String,
        required:true
    },
    catering:{
        type:String,
        required:true
    },
    totalPrice:{
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
    // rangeDate:{
    //     type:Date,
    //     required:true

    // },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User'
    },
    experienceStatus:{
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
    placeImage:{
        type:String
    }

});
experienceSchema.plugin(autoIncrement.plugin,{
    model:'Experience',
    field:'experienceID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('Experience', experienceSchema)
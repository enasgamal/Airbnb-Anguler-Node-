const mongoose =require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
//autoIncrement
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let onlineExperienceSchema= new mongoose.Schema({
    onlineExperienceID:{
        type:Number
    },
    onlineExperienceDescription:{
        type:String,
        required:true
    },
    onlineExperienceType:{
        type:String,
        required:true
    },
    onlineExperienceLanguage:{
        type:String,
        required:true
    },
    onlineExperienceLink:{
        type:String,
        required:true
    },
    onlineExperienceDate:{
        type:Date,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User'
    },
    onlineExperienceStatus:{
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
    onlineExperienceImage:{
        type:String
    }

});
onlineExperienceSchema.plugin(autoIncrement.plugin,{
    model:'onlineExperience',
    field:'onlineExperienceID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('onlineExperience', onlineExperienceSchema)
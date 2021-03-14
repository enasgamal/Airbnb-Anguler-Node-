const mongoose =require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
let connection = mongoose.createConnection("mongodb+srv://airbnb:airbnb@cluster0.qr2xc.mongodb.net/airbnb1",{useUnifiedTopology: true,useNewUrlParser: true});
autoIncrement.initialize(connection);

let interestedInOnlineExperienceSchema= new mongoose.Schema({
    interestedInID:{
        type:String
    },
    createdBy:{type:mongoose.SchemaTypes.ObjectId ,ref:'User' },

    interestedInPersonName:{
        type:String
    },

    interestedInPersonEmail:{
        type:String
    },

    onlineExperienceHostEmail:{
        type:String
    },

    onlineExperienceNumber:{
        type:Number
    },

    onlineExperienceType:{
        type:String
    },

    onlineExperienceDate:{
        type:Date
    },

    onlineExperienceStartTime:{
        type:Date
    },

    onlineExperienceEndTime:{
        type:Date
    },
    onlineExperienceLink:{
        type:String
    }

});
interestedInOnlineExperienceSchema.plugin(autoIncrement.plugin,{
    model:'interestedInOnlineExperience',
    field:'interestedInID',
    startAt:0,
    incrementBy:1
});
module.exports=mongoose.model('interestedInOnlineExperience',interestedInOnlineExperienceSchema);
const mongoose=require('mongoose');

const clientSchema=mongoose.Schema({
    name:String,
    place:String,
    mobile:String,
    course:String,
    date:{type:Date,default:Date.now},
    description:String
});

const Client=mongoose.model('client',clientSchema);

module.exports=Client;
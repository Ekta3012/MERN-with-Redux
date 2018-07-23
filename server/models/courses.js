const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({
    name:String,
    date:{type:Date,default:Date.now},
    description:String
});

const Course=mongoose.model('course',courseSchema);

module.exports=Course;
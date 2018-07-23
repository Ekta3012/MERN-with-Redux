const express = require('express');
const router = express.Router();

const ClientModel=require('../models');
const CourseModal=require('../models/courses');

router.post('/client',(req,res)=>{
    //res.send(req.body);
    const data=req.body || {};
    
    if(data.name=="" || data.mobile == "" || data.course == ""){
        var err="Required";
        return res.status(400).send(err);
    }
    const clientObj= new ClientModel({
        name:data.name,
        place:data.place,
        mobile:data.mobile,
        course:data.course,
        date:data.date,
        description:data.description
    })
    clientObj.save((err,response)=>{
        if(err)
            return res.status(400).send(err);
        return res.status(200).json('saved');
    });

});

/* router.get('/client/:name',(req,res)=>{
    const clientName = req.params.name || {};
    ClientModel.find({name:clientName},(err,response)=>{
        if(err)
            return res.status(400).send(err);
        return res.status(200).json(response);
    })
}); */

router.get('/showClient',(req,res)=>{
    ClientModel.find({},(err,response)=>{
        if(err)
            return res.status(400).send(err);
        return res.status(200).json(response);
    })
});

router.post("/client/delete",(req,res)=>{
    ClientModel.remove({name:req.body.name},(err,response)=>{
        if(err)
            return res.status(400).send(err)
        return res.status(200).send(response);
    })
});

/* router.get("/client/:name",(req,res)=>{
    ClientModel.findOneAndUpdate({name:req.params.name},(err,response)=>{
        const data=req.body || {};
    
    })
}) */

router.post('/course',(req,res)=>{
    //res.send(req.body);
    const data=req.body || {};
    
    const courseObj= new CourseModal({
        name:data.name,
        date:data.date,
        description:data.description
    })
    courseObj.save((err,response)=>{
        if(err)
            return res.status(400).send(err);
        return res.status(200).send(response);
    });
});

router.get('/showCourses',(req,res)=>{
    CourseModal.find({},(err,response)=>{
        if(err)
            return res.status(400).send(err);
        return res.status(200).json(response);
    })
});

module.exports=router;
 

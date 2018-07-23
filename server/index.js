const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const route = require('./route');
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})

app.use("/",route);

const mongodb='mongodb://localhost:27017/client';

mongoose.connect(mongodb,(err)=>{
    if(err)
        return console.log('Error while connecting the app');
    app.listen(3001, (err)=>{
        if(err) 
            console.log(err);
        console.log("Server is up at port 3001")
    });

},{ useNewUrlParser: true });








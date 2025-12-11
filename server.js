const { error } = require("console");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app=express();

mongoose.connect(process.env.url)
 .then(()=> console.log("database is connected"))
 .catch(err => {console.log(err)});


app.get("/" ,(req,res)=>{
    res.send("hello");
})



app.listen(3000||process.env.PORT,()=>{
    console.log("server is listening");
    
})
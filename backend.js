const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
let formData = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})
let Form = mongoose.model("Form",formData);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/api/hello",(req,res)=>{
    res.json("hello")
})

app.post("/message",async(req,res)=>{
    let formDataObj = new Form({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    try{
        let obj = await formDataObj.save();
        res.json({
            message: "submitted"
        })
    }
    catch(err){
        console.error(err)
    }

})
const listener = app.listen(port, ()=>{
    console.log("Port running on: "+ listener.address().port)
})
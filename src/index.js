const express = require('express');
const app = express();
const connect=require('./dbconfig')
const cors = require('cors');
const User=require ("./models/usermodel")

connect();
app.use(cors());
app.use(express.json());
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(user){
        res.send("login successful");
    }
    else{
        res.send("login failed");
    }
    
})
app.post('/signup',async(req,res) => {
    const {username,email,password}=req.body;
    const user=new User({username,email,password});
    await user.save();
    res.send("signup successful");
})
app.listen(5000,() => {
    console.log("server is running on port 5000");
})
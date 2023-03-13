const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

router.post("/signup", async(req,res)=>{
    const user = await User.findOne({
        where:{
            email:req.body.email
        } || {
            username: req.body.username
        }
    })
    if(user){
         return res.status(409).json("User already exist!")
    }
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
})

router.post("/login", async(req,res)=>{
    
})

router.post("/logout", async(req,res)=>{
    
})

module.exports = router;
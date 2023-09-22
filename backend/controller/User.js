const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req,res) => {
    try{

        const {name,email,password} = req.body;

        const isEmail = await User.findOne({ email: email})

        if(isEmail)
        {
            return res.status(400).json({
                success:true,
                message:"email already registered"
            })
        }

        const user = await User.create({name,email,password})

        const token = user.generateToken();

        res.status(201).cookie("token",token,{expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), httpOnly: true }).json({
            success:true,
            message:"user created",
            user
        })


    }catch(e)
    {
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}

exports.loginUser = async (req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({ email: email})

        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch)
        {
            return res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token =  user.generateToken();
        console.log(token)
        res.status(200).cookie("token",token,{expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), httpOnly: true }).json({
            success:true,
            user
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}

exports.logout = async (req, res) =>{
    try{
        res.clearCookie("token");
        res.status(200).json({
            success:true,
            message:"logged out"
        })
    }catch(e)
    {
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAuthenticated = async (req, res, next) =>{
    try{

        const {token} = req.cookies

        if(!token)
        {
            res.status(401).json({
                success:false,
                error:"Login First"
            })
        }

        const _id = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(_id)
        
        req.user = user

        next();

    }catch(err)
    {
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}

module.exports = isAuthenticated
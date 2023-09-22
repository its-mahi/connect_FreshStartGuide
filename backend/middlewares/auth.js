const jwt = require('jsonwebtoken');

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

        req.user = await User.findById(_id)

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
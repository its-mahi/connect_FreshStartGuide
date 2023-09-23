const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: [true,"Email should be unique"]
    },
    password:{
        type: String,
        required: [true,"Enter your password"]
    },
    avtar:{
        public_id:String,
        url:String
    },
    likedBlogs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        }
    ],
    blogs:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Blog"
            }
    ]

})

userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

userSchema.methods.generateToken = function () {

    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
}

module.exports = mongoose.model("User", userSchema)
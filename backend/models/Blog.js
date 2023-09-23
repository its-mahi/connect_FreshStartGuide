const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    tags:[
        {
            type:String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Blog', blogSchema);
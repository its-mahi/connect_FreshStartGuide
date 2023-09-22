const express = require('express');
const app = express();
const cookieparser = require('cookie-parser')
require('dotenv').config({path:"config/config.js"})
const cors = require('cors');

//middlewares
//Added Comment
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }))

//routes


//using routes

module.exports = app;
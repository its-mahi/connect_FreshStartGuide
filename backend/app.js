const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieparser = require("cookie-parser");
require("dotenv").config({ path: "config/config.env" });
const cors = require("cors");

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:'http://localhost:9000',
    credentials:true
}))
//new comments
=======
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin of your frontend application
  credentials: true, // Allow cookies and other credentials to be sent
  //   exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
>>>>>>> 71eabb1682e0bc2be1c12cbfe21629f281456a16

//routes
const user = require("./routes/User");
const blog = require("./routes/Blog");

//using routes
app.use("/api/v1", user);
app.use("/api/v1", blog);

module.exports = app;

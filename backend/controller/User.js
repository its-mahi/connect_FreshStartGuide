const Blog = require("../models/Blog");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.registerUser = async (req, res) => {
  try {
    console.log("EHwdwd");
    const file = req.files.avtar;
    console.log(file);

    await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      }
      url = result.url;
      public_id = result.public_id;
    });

    const { name, email, password } = req.body;
    const { avatar } = req.files;
    const isEmail = await User.findOne({ email: email });

    if (isEmail) {
      return res.status(400).json({
        success: true,
        message: "email already registered",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      avtar: { url, public_id },
    });

    const token = user.generateToken();

    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "user created",
        user,
      });
  } catch (e) {
    console.log("Hey error ayvi");
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    console.log("Hey");
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = user.generateToken();
    // console.log(token);
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        user,
      });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "logged out",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    console.log("in profile");
    const user = await User.findById(req.params.id).populate("blogs");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

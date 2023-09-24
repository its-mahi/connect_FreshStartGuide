const express = require("express");
const Notes = require("../models/Notes");
const User = require("../models/User");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadNote = async (req, res) => {
  try {
    console.log(req);
    const file = req.files.file;
    const title = req.body.title;
    await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      }
      url = result.url;
      public_id = result.public_id;
    });

    const notes = await Notes.create({
      author: req.user._id,
      title: title,
      notes: { url, public_id },
    });
    req.user.notes.push(notes._id);
    req.user.save();
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log("Hey error ayvi");
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;

    const notes = await Notes.findById(id);

    if (!notes) {
      return res.status(404).json({
        success: false,
        error: "Notes not found",
      });
    }

    if (!req.user.notes.includes(id)) {
      return res.status(400).json({
        success: false,
        error: "You cannot delete this Note",
      });
    }

    const index = req.user.notes.indexOf(id);
    req.user.notes.splice(index, 1);
    req.user.save();

    await Notes.deleteOne(notes._id);

    return res.status(200).json({
      success: true,
      message: "Notes deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.readNote = async (req, res) => {
  try {
    const id = req.params.id;

    const notes = await Notes.findById(id);

    if (!notes) {
      return res.status(404).json({
        success: false,
        error: "Note not found",
      });
    }
    res.status(200).json({
      success: true,
      notes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
exports.getAllNote = async (req, res) => {
  try {
    const notes = await Notes.find().limit(10).populate("author");
    res.status(200).json({
      success: true,
      notes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

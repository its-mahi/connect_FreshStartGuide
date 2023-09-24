<<<<<<< HEAD
const express = require("express");
=======
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69
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
<<<<<<< HEAD
    console.log(req);
    const file = req.files.file;
=======
    const file = req.files.notes;
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69
    const title = req.body.title;
    await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      if (err) {
        console.log(err);
      }
      url = result.url;
      public_id = result.public_id;
    });

<<<<<<< HEAD
    const notes = await Notes.create({
      author: req.user._id,
      title: title,
=======

    const notes = await Notes.create({
      title : title,
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69
      notes: { url, public_id },
    });
    req.user.notes.push(notes._id);
    req.user.save();
<<<<<<< HEAD
    res.status(200).json({
      success: true,
    });
=======

>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69
  } catch (e) {
    console.log("Hey error ayvi");
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

<<<<<<< HEAD
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
=======

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

  exports.deleteNote = async (req, res) => {
    try {
      const id = req.params.id;
  
      const notes = await Notes.findById(id);
  
      if (!notes) {
        return res.status(404).json({
          success: false,
          error: "Note not found",
        });
      }
  
      if (!req.user.notes.includes(id)) {
        return res.status(400).json({
          success: false,
          error: "You cannot delete this note",
        });
      }
  
      const index = req.user.notes.indexOf(id);
      req.user.notes.splice(index, 1);
      req.user.save();
  
      await Notes.deleteOne(notes._id);
  
      return res.status(200).json({
        success: true,
        message: "Note deleted",
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
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69

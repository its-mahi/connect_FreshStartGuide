const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  notes: {
    public_id: String,
    url: String,
  },
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;

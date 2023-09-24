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
<<<<<<< HEAD
  notes: {
    public_id: String,
    url: String,
  },
});

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
=======
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true
    },
  ],
});
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69

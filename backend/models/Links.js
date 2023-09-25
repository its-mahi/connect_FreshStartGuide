const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Links", linksSchema);



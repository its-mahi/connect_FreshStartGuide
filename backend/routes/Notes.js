const express = require("express");
const {
  uploadNote,
  readNote,
  deleteNote,
  getAllNote,
} = require("../controller/Notes");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.post("/uploadNote", isAuthenticated, uploadNote);
router
  .get("/readNote/:id", isAuthenticated, readNote)
  .delete("/deleteNote/:id", isAuthenticated, deleteNote);
router.get("/getAllNotes", isAuthenticated, getAllNote);
module.exports = router;

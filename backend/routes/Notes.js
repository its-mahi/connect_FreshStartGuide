const express = require("express");
const { getAllNote } = require("../controller/Notes");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();


router.post("/uploadNote", isAuthenticated,uplodeNote);
router
  .get("/notes/:id", isAuthenticated, readNote)
  .delete("/notes/:id", isAuthenticated, deleteNote);
router.post("/getAllNotes", isAuthenticated, getAllNote);
module.exports = router;

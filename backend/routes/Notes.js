const express = require("express");
<<<<<<< HEAD
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
=======
const { getAllNote } = require("../controller/Notes");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();


// router.post("/uploadNote", isAuthenticated,uplodeNote);
// router
//   .get("/notes/:id", isAuthenticated, readNote)
//   .delete("/notes/:id", isAuthenticated, deleteNote);
// router.post("/getAllNotes", isAuthenticated, getAllNote);
// module.exports = router;
>>>>>>> aa1a7096ba92dfe3f51f37c2cfb27e9c8c3cab69

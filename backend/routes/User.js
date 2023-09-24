const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getProfile,
  getMyProfile,
} = require("../controller/User");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout); 
router.get("/profilee/me",isAuthenticated,getMyProfile)
router.get("/profile/:id",isAuthenticated,getProfile)


module.exports = router;

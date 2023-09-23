const express = require("express");
const { registerUser, loginUser, logout } = require("../controller/User");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

<<<<<<< HEAD
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',logout)
=======
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
>>>>>>> 71eabb1682e0bc2be1c12cbfe21629f281456a16

module.exports = router;

const express = require("express");

const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
    logoutUser
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);
router.post("/logout", authMiddleware, logoutUser);

module.exports = router;

const express = require("express");

const {
    createFeedback,
    getAllFeedback,
    getFeedbackByComplaint
} = require("../controllers/feedbackController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Feedback Routes
router.post("/", authMiddleware, createFeedback);

router.get("/", authMiddleware, getAllFeedback);

router.get("/:complaintId", authMiddleware, getFeedbackByComplaint);

module.exports = router;
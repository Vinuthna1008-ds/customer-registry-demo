const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
    getAllComplaintsForAdmin
} = require("../controllers/complaintController");

// Customer Routes

router.post("/", authMiddleware, createComplaint);

router.get("/", authMiddleware, getAllComplaints);

// Admin Route (IMPORTANT: before "/:id")
router.get(
    "/admin/all",
    authMiddleware,
    adminMiddleware,
    getAllComplaintsForAdmin
);

router.get("/:id", authMiddleware, getComplaintById);

router.put("/:id", authMiddleware, updateComplaint);

router.delete("/:id", authMiddleware, deleteComplaint);

module.exports = router;
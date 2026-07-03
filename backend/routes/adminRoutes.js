const express = require("express");

const {
    getDashboard,
    getAllUsers,
    assignComplaint,
    updateComplaintStatus,
    deleteUser
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// All Admin Routes
router.use(authMiddleware);
router.use(roleMiddleware("admin"));

// Dashboard
router.get("/dashboard", getDashboard);

// Users
router.get("/users", getAllUsers);

router.delete("/users/:id", deleteUser);

// Complaint Management
router.put("/assign/:complaintId", assignComplaint);

router.put("/status/:complaintId", updateComplaintStatus);

module.exports = router;
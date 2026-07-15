const User = require("../models/user");
const Complaint = require("../models/Complaint");

// ======================
// Dashboard Statistics
// ======================
const getDashboard = async (req, res) => {
    try {

        const totalComplaints = await Complaint.countDocuments();

        const pendingComplaints = await Complaint.countDocuments({
            status: "Pending",
        });

        const resolvedComplaints = await Complaint.countDocuments({
            status: "Resolved",
        });

        const totalUsers = await User.countDocuments();

        res.status(200).json({
            success: true,
            stats: {
                totalComplaints,
                pendingComplaints,
                resolvedComplaints,
                totalUsers,
            },
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ======================
// Get All Users
// ======================
const getAllUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            users,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ======================
// Assign Complaint
// ======================
const assignComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findById(req.params.complaintId);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found",
            });
        }

        complaint.assignedExecutive = req.body.executiveId;
        complaint.status = "Assigned";

        await complaint.save();

        res.status(200).json({
            success: true,
            message: "Complaint assigned successfully",
            complaint,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ======================
// Update Complaint Status
// ======================
const updateComplaintStatus = async (req, res) => {
    try {

        const complaint = await Complaint.findById(req.params.complaintId);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found",
            });
        }

        complaint.status = req.body.status;

        await complaint.save();

        res.status(200).json({
            success: true,
            message: "Complaint status updated successfully",
            complaint,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ======================
// Delete User
// ======================
const deleteUser = async (req, res) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    getDashboard,
    getAllUsers,
    assignComplaint,
    updateComplaintStatus,
    deleteUser,
};
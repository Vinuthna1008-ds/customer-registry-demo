const Complaint = require("../models/Complaint");

// ===============================
// Create Complaint
// ===============================
const createComplaint = async (req, res) => {
    try {

        const {
            title,
            description,
            category,
            priority
        } = req.body;

        // Validate required fields
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and Description are required."
            });
        }

        // Generate Ticket ID
        const ticketId = "CCR" + Date.now().toString().slice(-6);

        // Create Complaint
        const complaint = await Complaint.create({
            ticketId,
            customer: req.user._id,
            title,
            description,
            category,
            priority
        });

        res.status(201).json({
            success: true,
            message: "Complaint Submitted Successfully",
            complaint
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ===============================
// Get All Complaints
// ===============================
const getAllComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find({
            customer: req.user._id
        })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            complaints
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ===============================
// Get Complaint By ID
// ===============================
const getComplaintById = async (req, res) => {
    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            customer: req.user._id
        });

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        res.status(200).json({
            success: true,
            complaint
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ===============================
// Update Complaint
// ===============================
const updateComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findOne({
            _id: req.params.id,
            customer: req.user._id
        });
        if(!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }
        complaint.title = req.body.title || complaint.title;
        complaint.description = req.body.description || complaint.description;
        complaint.category = req.body.category || complaint.category;
        complaint.priority = req.body.priority || complaint.priority;
        complaint.status = req.body.status || complaint.status;
        await complaint.save();
        res.status(200).json({
            success: true,
            message: "Complaint Updated Successfully",
            complaint
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

// ===============================
// Delete Complaint
// ===============================
const deleteComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            customer: req.user._id
        });

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        await Complaint.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Complaint deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ===============================
// Admin - Get All Complaints
// ===============================
const getAllComplaintsForAdmin = async (req, res) => {
    try {

        const complaints = await Complaint.find()
            .populate("customer", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            complaints
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
module.exports = {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint,
    getAllComplaintsForAdmin
};
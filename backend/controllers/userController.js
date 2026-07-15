const User = require("../models/user");

// Get Profile
const getProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user._id).select("-password");

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Profile
const updateProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getProfile,
    updateProfile
};
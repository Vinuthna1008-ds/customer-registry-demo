import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../services/complaintService";

function SubmitComplaint() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        category: "Technical",
        priority: "Medium",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = await createComplaint(formData);

            alert(data.message || "Complaint submitted successfully!");

            // Clear the form
            setFormData({
                title: "",
                category: "Technical",
                priority: "Medium",
                description: ""
            });

            // Redirect after a short delay
            setTimeout(() => {
                navigate("/complaints");
            }, 500);

        } catch (error) {
            console.error("Submit Complaint Error:", error);

            alert(
                error.response?.data?.message ||
                error.message ||
                "Failed to submit complaint."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Register Complaint</h3>
                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                {/* Title */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Complaint Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter complaint title"
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Category
                                    </label>

                                    <select
                                        className="form-select"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option value="Technical">Technical</option>
                                        <option value="Billing">Billing</option>
                                        <option value="Delivery">Delivery</option>
                                        <option value="Product">Product</option>
                                        <option value="Service">Service</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Priority */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Priority
                                    </label>

                                    <select
                                        className="form-select"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Description
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Describe your complaint..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit Complaint"}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default SubmitComplaint;
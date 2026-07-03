import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { updateComplaint } from "../services/complaintService";

function EditComplaint() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        priority: "",
        description: ""
    });

    useEffect(() => {
        fetchComplaint();
    }, []);

    const fetchComplaint = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/complaints/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setFormData({
                title: response.data.complaint.title,
                category: response.data.complaint.category,
                priority: response.data.complaint.priority,
                description: response.data.complaint.description
            });

        } catch (error) {
            console.log(error);
        }
    };

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

            const response = await updateComplaint(id, formData);

            alert(response.message);

            navigate(`/complaints/${id}`);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Failed to update complaint."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow">

                        <div className="card-header bg-warning">
                            <h3>Edit Complaint</h3>
                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Title</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Category</label>

                                    <select
                                        className="form-select"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option>Technical</option>
                                        <option>Billing</option>
                                        <option>Delivery</option>
                                        <option>Product</option>
                                        <option>Service</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Priority</label>

                                    <select
                                        className="form-select"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description</label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    className="btn btn-warning w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Updating..." : "Update Complaint"}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EditComplaint;
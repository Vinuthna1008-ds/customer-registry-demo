import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { deleteComplaint } from "../services/complaintService";

function ComplaintDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [complaint, setComplaint] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComplaint();
    }, []);

    const fetchComplaint = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/complaints/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setComplaint(response.data.complaint);
        } catch (error) {
            console.log(error);
            alert("Failed to load complaint.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this complaint?"
        );

        if (!confirmDelete) return;

        try {
            const response = await deleteComplaint(id);

            alert(response.message);

            navigate("/complaints");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to delete complaint."
            );
        }
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3>Complaint Details</h3>
                </div>

                <div className="card-body">

                    <p><strong>Ticket ID:</strong> {complaint.ticketId}</p>

                    <p><strong>Title:</strong> {complaint.title}</p>

                    <p><strong>Category:</strong> {complaint.category}</p>

                    <p><strong>Priority:</strong> {complaint.priority}</p>

                    <p><strong>Status:</strong> {complaint.status}</p>

                    <p><strong>Description:</strong></p>

                    <div className="border rounded p-3 bg-light mb-3">
                        {complaint.description}
                    </div>

                    <p>
                        <strong>Created On:</strong>{" "}
                        {new Date(complaint.createdAt).toLocaleString()}
                    </p>

                    <div className="mt-4">

                        <Link
                            to="/complaints"
                            className="btn btn-secondary"
                        >
                            Back
                        </Link>

                        <Link
                            to={`/complaints/edit/${complaint._id}`}
                            className="btn btn-warning ms-2"
                        >
                            Edit
                        </Link>

                        <button
                            className="btn btn-danger ms-2"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ComplaintDetails;
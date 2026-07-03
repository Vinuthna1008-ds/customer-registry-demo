import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComplaints } from "../services/complaintService";

function Complaints() {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await getComplaints();
            setComplaints(response.complaints);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch complaints.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ FILTER LOGIC
    const filteredComplaints = complaints.filter((complaint) => {

        const matchesSearch =
            complaint.title.toLowerCase().includes(search.toLowerCase()) ||
            complaint.ticketId.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            complaint.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>My Complaints</h2>

                <Link
                    to="/submit-complaint"
                    className="btn btn-primary"
                >
                    + New Complaint
                </Link>

            </div>

            {/* Search + Filter */}
            <div className="row mb-3">

                <div className="col-md-6">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title or ticket ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="col-md-3">

                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >

                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Assigned">Assigned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>

                    </select>

                </div>

            </div>

            {/* Table */}
            <div className="card shadow">

                <div className="card-body">

                    <table className="table table-hover align-middle">

                        <thead className="table-dark">
                            <tr>
                                <th>Ticket ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredComplaints.length === 0 ? (

                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No complaints found.
                                    </td>
                                </tr>

                            ) : (

                                filteredComplaints.map((complaint) => (

                                    <tr key={complaint._id}>

                                        <td>{complaint.ticketId}</td>

                                        <td>
                                            <Link
                                                to={`/complaints/${complaint._id}`}
                                                className="text-decoration-none fw-semibold"
                                            >
                                                {complaint.title}
                                            </Link>
                                        </td>

                                        <td>{complaint.category}</td>

                                        <td>{complaint.priority}</td>

                                        <td>
                                            <span
                                                className={`badge ${
                                                    complaint.status === "Pending"
                                                        ? "bg-warning text-dark"
                                                        : complaint.status === "Resolved"
                                                        ? "bg-success"
                                                        : "bg-primary"
                                                }`}
                                            >
                                                {complaint.status}
                                            </span>
                                        </td>

                                        <td>
                                            {new Date(
                                                complaint.createdAt
                                            ).toLocaleDateString()}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Complaints;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function AdminComplaints() {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/complaints/admin/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setComplaints(response.data.complaints);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to load complaints."
            );

        } finally {

            setLoading(false);

        }

    };

    const updateStatus = async (id, status) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(
                `/complaints/${id}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchComplaints();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to update status."
            );

        }

    };

    const filteredComplaints = complaints.filter((complaint) => {

        const matchesSearch =
            complaint.ticketId.toLowerCase().includes(search.toLowerCase()) ||
            complaint.title.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            complaint.status === statusFilter;

        return matchesSearch && matchesStatus;

    });

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    return (

        <div className="container py-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Complaint Management</h2>

                <Link
                    to="/admin"
                    className="btn btn-secondary"
                >
                    Back
                </Link>

            </div>

            <div className="row mb-4">

                <div className="col-md-6">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Ticket ID or Title"
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
                        <option>All</option>
                        <option>Pending</option>
                        <option>Assigned</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                        <option>Closed</option>
                    </select>

                </div>

            </div>

            <div className="table-responsive">

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>Ticket</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>View</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredComplaints.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="9"
                                    className="text-center"
                                >
                                    No Complaints Found
                                </td>

                            </tr>

                        ) : (

                            filteredComplaints.map((complaint) => (

                                <tr key={complaint._id}>

                                    <td>{complaint.ticketId}</td>

                                    <td>{complaint.customer?.name}</td>

                                    <td>{complaint.customer?.email}</td>

                                    <td>{complaint.title}</td>

                                    <td>{complaint.category}</td>

                                    <td>

                                        <span
                                            className={`badge ${
                                                complaint.priority === "High"
                                                    ? "bg-danger"
                                                    : complaint.priority === "Medium"
                                                    ? "bg-warning text-dark"
                                                    : "bg-success"
                                            }`}
                                        >
                                            {complaint.priority}
                                        </span>

                                    </td>

                                    <td>

                                        <span className="badge bg-primary">
                                            {complaint.status}
                                        </span>

                                    </td>

                                    <td>

                                        <select
                                            className="form-select form-select-sm"
                                            value={complaint.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    complaint._id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option>Pending</option>
                                            <option>Assigned</option>
                                            <option>In Progress</option>
                                            <option>Resolved</option>
                                            <option>Closed</option>

                                        </select>

                                    </td>

                                    <td>

                                        <Link
                                            to={`/complaints/${complaint._id}`}
                                            className="btn btn-primary btn-sm"
                                        >
                                            View
                                        </Link>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default AdminComplaints;
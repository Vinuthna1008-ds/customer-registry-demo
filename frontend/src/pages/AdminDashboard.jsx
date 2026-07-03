import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaClipboardList,
    FaUsers,
    FaCheckCircle,
    FaClock
} from "react-icons/fa";

import { getDashboard } from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState({
        totalComplaints: 0,
        pendingComplaints: 0,
        resolvedComplaints: 0,
        totalUsers: 0
    });

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        try {

            const response = await getDashboard();

            setStats(response.stats);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to load dashboard."
            );

        }
    };

    return (
        <div className="container py-5">

            <div className="mb-5">

                <h1 className="fw-bold">
                    Admin Dashboard
                </h1>

                <p className="text-muted">
                    Manage complaints and users.
                </p>

            </div>

            <div className="row g-4 mb-5">

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <FaClipboardList
                                size={45}
                                className="text-primary mb-3"
                            />

                            <h2>{stats.totalComplaints}</h2>

                            <p className="text-muted mb-0">
                                Total Complaints
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <FaClock
                                size={45}
                                className="text-warning mb-3"
                            />

                            <h2>{stats.pendingComplaints}</h2>

                            <p className="text-muted mb-0">
                                Pending
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <FaCheckCircle
                                size={45}
                                className="text-success mb-3"
                            />

                            <h2>{stats.resolvedComplaints}</h2>

                            <p className="text-muted mb-0">
                                Resolved
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 col-lg-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <FaUsers
                                size={45}
                                className="text-danger mb-3"
                            />

                            <h2>{stats.totalUsers}</h2>

                            <p className="text-muted mb-0">
                                Registered Users
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow border-0">

                <div className="card-header bg-dark text-white">
                    <h4 className="mb-0">
                        Quick Actions
                    </h4>
                </div>

                <div className="card-body">

                    <div className="row g-3">

                        <div className="col-md-4">

                            <Link
                                to="/admin/complaints"
                                className="btn btn-primary w-100"
                            >
                                View All Complaints
                            </Link>

                        </div>

                        <div className="col-md-4">

                            <Link
                                to="/admin/users"
                                className="btn btn-success w-100"
                            >
                                Manage Users
                            </Link>

                        </div>

                        <div className="col-md-4">

                            <Link
                                to="/dashboard"
                                className="btn btn-secondary w-100"
                            >
                                Customer Dashboard
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;
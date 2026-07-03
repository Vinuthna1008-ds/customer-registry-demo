import { Link } from "react-router-dom";

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="container py-5">

            <h2 className="mb-4">
                Welcome, {user?.name} 👋
            </h2>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card shadow text-center p-4">
                        <h3>0</h3>
                        <p>Total Complaints</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center p-4">
                        <h3>0</h3>
                        <p>Pending</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center p-4">
                        <h3>0</h3>
                        <p>Resolved</p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow text-center p-4">
                        <h3>0</h3>
                        <p>Feedback</p>
                    </div>
                </div>

            </div>

            <div className="mt-5 d-flex gap-3">

                <Link
                    to="/complaints"
                    className="btn btn-primary"
                >
                    View Complaints
                </Link>

                <Link
                    to="/profile"
                    className="btn btn-outline-primary"
                >
                    My Profile
                </Link>
                <Link
                    to="/submit-complaint"
                    className="btn btn-outline-primary"
                >
                    Submit Complaint
                </Link>
                <Link
                    to="/complaints"
                    className="btn btn-primary"
                >
                    View Complaints
                </Link>
            </div>

        </div>
    );
}

export default Dashboard;
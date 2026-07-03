
import { Link } from "react-router-dom";
import {
    FaClipboardList,
    FaUserShield,
    FaBell,
    FaCheckCircle
} from "react-icons/fa";

function Home() {

    return (

        <>
            {/* Hero Section */}

            <section className="bg-primary text-white py-5">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <h1 className="display-4 fw-bold">
                                Customer Care Registry
                            </h1>

                            <p className="lead mt-3">
                                Register, track and manage customer complaints
                                quickly and efficiently using our Complaint
                                Management System.
                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/register"
                                    className="btn btn-light btn-lg me-3"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    to="/login"
                                    className="btn btn-outline-light btn-lg"
                                >
                                    Login
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-6 text-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                                alt="Customer Support"
                                className="img-fluid"
                                style={{ maxHeight: "320px" }}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="container py-5">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Why Choose Customer Care Registry?
                    </h2>

                    <p className="text-muted">
                        Everything you need to manage complaints effectively.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-md-3">

                        <div className="card shadow border-0 h-100">

                            <div className="card-body text-center">

                                <FaClipboardList
                                    size={45}
                                    className="text-primary mb-3"
                                />

                                <h5>Complaint Tracking</h5>

                                <p className="text-muted">
                                    Easily track complaint status from
                                    submission to resolution.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 h-100">

                            <div className="card-body text-center">

                                <FaUserShield
                                    size={45}
                                    className="text-success mb-3"
                                />

                                <h5>Secure Login</h5>

                                <p className="text-muted">
                                    JWT authentication keeps your data safe.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 h-100">

                            <div className="card-body text-center">

                                <FaBell
                                    size={45}
                                    className="text-warning mb-3"
                                />

                                <h5>Status Updates</h5>

                                <p className="text-muted">
                                    Receive updates whenever complaint status
                                    changes.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 h-100">

                            <div className="card-body text-center">

                                <FaCheckCircle
                                    size={45}
                                    className="text-danger mb-3"
                                />

                                <h5>Quick Resolution</h5>

                                <p className="text-muted">
                                    Admin can assign and resolve complaints
                                    efficiently.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* How It Works */}

            <section className="bg-light py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        How It Works
                    </h2>

                    <div className="row text-center">

                        <div className="col-md-4">

                            <h3>1️⃣</h3>

                            <h5>Register</h5>

                            <p>Create an account securely.</p>

                        </div>

                        <div className="col-md-4">

                            <h3>2️⃣</h3>

                            <h5>Submit Complaint</h5>

                            <p>Describe your issue and submit it.</p>

                        </div>

                        <div className="col-md-4">

                            <h3>3️⃣</h3>

                            <h5>Track Status</h5>

                            <p>Monitor progress until resolution.</p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-5 text-center">

                <div className="container">

                    <h2 className="fw-bold">
                        Ready to Get Started?
                    </h2>

                    <p className="text-muted">
                        Register today and manage your complaints easily.
                    </p>

                    <Link
                        to="/register"
                        className="btn btn-primary btn-lg"
                    >
                        Create Account
                    </Link>

                </div>

            </section>

        </>
    );

}

export default Home;

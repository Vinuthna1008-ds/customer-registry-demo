
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const logoutHandler = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    Customer Care Registry
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                        {!token ? (
                            <>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </li>

                            </>
                        ) : (
                            <>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/complaints"
                                    >
                                        Complaints
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/submit-complaint"
                                    >
                                        Submit Complaint
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                </li>

                                {user?.role === "admin" && (

                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/admin"
                                        >
                                            Admin
                                        </Link>
                                    </li>

                                )}

                                <li className="nav-item">

                                    <button
                                        className="btn btn-danger ms-2"
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </button>

                                </li>

                            </>
                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;

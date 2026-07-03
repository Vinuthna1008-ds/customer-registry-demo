import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.svg";

function Hero() {
    return (
        <section className="hero-section container py-5">
            <div className="row align-items-center">

                {/* Left Side */}
                <div className="col-lg-6">

                    <span className="badge bg-primary mb-3">
                        Customer Support Platform
                    </span>

                    <h1 className="display-4 fw-bold mb-4">
                        Manage Customer Complaints with Confidence
                    </h1>

                    <p className="lead text-secondary mb-4">
                        A centralized platform to register, track, manage,
                        and resolve customer complaints efficiently while
                        improving customer satisfaction.
                    </p>

                    <div className="d-flex gap-3">
                        <Link
                            to="/register"
                            className="btn btn-primary btn-lg"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/about"
                            className="btn btn-outline-primary btn-lg"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>

                {/* Right Side */}
                <div className="col-lg-6 text-center mt-5 mt-lg-0">

                    <img
                        src={heroImage}
                        alt="Customer Support"
                        className="img-fluid hero-image"
                    />

                </div>

            </div>
        </section>
    );
}

export default Hero;
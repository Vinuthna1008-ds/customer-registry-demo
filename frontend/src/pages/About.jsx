
function About() {

    return (

        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    About Customer Care Registry
                </h1>

                <p className="text-muted">
                    A complaint management system that helps customers register complaints
                    and enables administrators to resolve them efficiently.
                </p>

            </div>

            <div className="row">

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-body">

                            <h4>Our Mission</h4>

                            <p>
                                To provide a transparent, fast and reliable complaint
                                management platform for customers and organizations.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-body">

                            <h4>Our Vision</h4>

                            <p>
                                Improve customer satisfaction by ensuring every complaint
                                is tracked until resolution.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow h-100">

                        <div className="card-body">

                            <h4>Features</h4>

                            <ul>

                                <li>Complaint Tracking</li>

                                <li>Admin Dashboard</li>

                                <li>Status Updates</li>

                                <li>User Management</li>

                                <li>Secure Authentication</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default About;

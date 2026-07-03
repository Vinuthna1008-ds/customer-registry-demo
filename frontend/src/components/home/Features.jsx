import {
    FaClipboardList,
    FaChartLine,
    FaComments,
    FaLock
} from "react-icons/fa";

function Features() {

    const features = [

        {
            icon: <FaClipboardList size={45} />,
            title: "Complaint Management",
            description:
                "Create, manage and track customer complaints in one place."
        },

        {
            icon: <FaChartLine size={45} />,
            title: "Real-Time Tracking",
            description:
                "Track complaint progress from submission to resolution."
        },

        {
            icon: <FaComments size={45} />,
            title: "Customer Feedback",
            description:
                "Collect valuable feedback after every resolved complaint."
        },

        {
            icon: <FaLock size={45} />,
            title: "Secure Authentication",
            description:
                "JWT-based authentication with role-based authorization."
        }

    ];

    return (

        <section className="container py-5">

            <div className="text-center mb-5">

                <h2 className="fw-bold">
                    Why Choose Our Platform?
                </h2>

                <p className="text-muted">
                    Everything you need to manage customer complaints
                    professionally.
                </p>

            </div>

            <div className="row g-4">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="col-md-6 col-lg-3"
                    >

                        <div className="card border-0 shadow h-100 text-center p-4 feature-card">

                            <div className="text-primary mb-3">
                                {feature.icon}
                            </div>

                            <h5>{feature.title}</h5>

                            <p className="text-muted">
                                {feature.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Features;
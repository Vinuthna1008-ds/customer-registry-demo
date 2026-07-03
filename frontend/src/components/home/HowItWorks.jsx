import {
    FaUserPlus,
    FaClipboardList,
    FaUserShield,
    FaSearch,
    FaCheckCircle
} from "react-icons/fa";

function HowItWorks() {

    const steps = [
        {
            icon: <FaUserPlus size={40} />,
            title: "Register",
            description: "Create your account to access the platform."
        },
        {
            icon: <FaClipboardList size={40} />,
            title: "Submit Complaint",
            description: "Provide complaint details with supporting documents."
        },
        {
            icon: <FaUserShield size={40} />,
            title: "Admin Reviews",
            description: "The admin reviews and assigns the complaint."
        },
        {
            icon: <FaSearch size={40} />,
            title: "Track Status",
            description: "Monitor the progress of your complaint anytime."
        },
        {
            icon: <FaCheckCircle size={40} />,
            title: "Resolved",
            description: "Receive updates once your issue is successfully resolved."
        }
    ];

    return (
        <section className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold">How It Works</h2>
                <p className="text-muted">
                    Follow these simple steps to resolve your complaint efficiently.
                </p>
            </div>

            <div className="row g-4">

                {steps.map((step, index) => (

                    <div className="col-md-6 col-lg" key={index}>

                        <div className="card border-0 shadow text-center p-4 h-100 step-card">

                            <div className="text-primary mb-3">
                                {step.icon}
                            </div>

                            <h5>{step.title}</h5>

                            <p className="text-muted">
                                {step.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default HowItWorks;
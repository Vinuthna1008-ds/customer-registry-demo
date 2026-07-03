import { useEffect, useState } from "react";
import {
    FaUsers,
    FaClipboardCheck,
    FaSmile,
    FaBuilding
} from "react-icons/fa";

function Counter({ end, suffix }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 20);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}

function Statistics() {
    const stats = [
        {
            icon: <FaUsers size={40} />,
            end: 1000,
            suffix: "+",
            title: "Happy Customers"
        },
        {
            icon: <FaClipboardCheck size={40} />,
            end: 500,
            suffix: "+",
            title: "Complaints Resolved"
        },
        {
            icon: <FaSmile size={40} />,
            end: 95,
            suffix: "%",
            title: "Customer Satisfaction"
        },
        {
            icon: <FaBuilding size={40} />,
            end: 50,
            suffix: "+",
            title: "Organizations"
        }
    ];

    return (
        <section className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold">Our Impact</h2>
                <p className="text-muted">
                    Trusted by customers and organizations across the country.
                </p>
            </div>

            <div className="row g-4">

                {stats.map((item, index) => (

                    <div className="col-md-6 col-lg-3" key={index}>

                        <div className="card text-center border-0 shadow p-4 stat-card">

                            <div className="text-primary mb-3">
                                {item.icon}
                            </div>

                            <h2 className="fw-bold text-primary">
                                <Counter
                                    end={item.end}
                                    suffix={item.suffix}
                                />
                            </h2>

                            <p className="text-muted">
                                {item.title}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Statistics;
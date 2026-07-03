
function Contact() {

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-7">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3>Contact Us</h3>

                        </div>

                        <div className="card-body">

                            <form>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
                                        className="form-control"
                                        placeholder="Write your message..."
                                    ></textarea>

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Send Message
                                </button>

                            </form>

                            <hr />

                            <h5>Customer Care Registry</h5>

                            <p>Email: support@customerregistry.com</p>

                            <p>Phone: +91 9876543210</p>

                            <p>Address: Hyderabad, Telangana, India</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Contact;

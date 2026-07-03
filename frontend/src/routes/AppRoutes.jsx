import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard";
import Complaints from "../pages/complaints";
import Profile from "../pages/profile";
import SubmitComplaint from "../pages/SubmitComplaint";
import ComplaintDetails from "../pages/ComplaintDetails";
import EditComplaint from "../pages/EditComplaint";

import AdminDashboard from "../pages/AdminDashboard";
import AdminComplaints from "../pages/AdminComplaints";
import AdminUsers from "../pages/AdminUsers";
import About from "../pages/About";
import Contact from "../pages/Contact";
function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<MainLayout />}>

                    {/* Home */}
                    <Route index element={<Home />} />

                    {/* Authentication */}
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />

                    {/* Dashboard */}
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Complaints */}
                    <Route path="complaints" element={<Complaints />} />
                    <Route path="complaints/:id" element={<ComplaintDetails />} />

                    {/* Submit Complaint */}
                    <Route
                        path="submit-complaint"
                        element={<SubmitComplaint />}
                    />

                    {/* Profile */}
                    <Route path="profile" element={<Profile />} />
                    <Route path="complaints/:id/edit" element={<EditComplaint />} /> 
                    <Route path="admin" element={<AdminDashboard />} />  
                    <Route path="admin/complaints" element={<AdminComplaints />} />
                    <Route path="admin/users" element={<AdminUsers />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    {/* 404 */}
                    <Route
                        path="*"
                        element={
                            <div className="container py-5 text-center">
                                <h2>404 - Page Not Found</h2>
                            </div>
                        }
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;
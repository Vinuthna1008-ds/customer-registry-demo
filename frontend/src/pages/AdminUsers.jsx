import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../services/adminService";

function AdminUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.users);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this user?")) return;

        await deleteUser(id);

        loadUsers();
    };

    return (
        <div className="container py-5">

            <div className="d-flex justify-content-between mb-4">
                <h2>Manage Users</h2>

                <Link
                    to="/admin"
                    className="btn btn-secondary"
                >
                    Back
                </Link>
            </div>

            <table className="table table-bordered">

                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (

                        <tr key={user._id}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.role}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AdminUsers;
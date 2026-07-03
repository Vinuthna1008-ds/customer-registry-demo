import api from "./api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getDashboard = async () => {
    const response = await api.get("/admin/dashboard", token());
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get("/admin/users", token());
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`/admin/users/${id}`, token());
    return response.data;
};
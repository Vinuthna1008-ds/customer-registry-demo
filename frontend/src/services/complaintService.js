import api from "./api";

export const createComplaint = async (complaintData) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/complaints",
        complaintData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const getComplaints = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        "/complaints",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const getAllComplaintsAdmin = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        "/complaints/admin/all",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const updateComplaint = async (id, complaintData) => {

    const token = localStorage.getItem("token");

    const response = await api.put(
        `/complaints/${id}`,
        complaintData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const deleteComplaint = async (id) => {

    const token = localStorage.getItem("token");

    const response = await api.delete(
        `/complaints/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};
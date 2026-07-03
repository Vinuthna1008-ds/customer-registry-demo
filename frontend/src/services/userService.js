import api from "./api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getProfile = async () => {
    const response = await api.get("/users/profile", token());
    return response.data;
};

export const updateProfile = async (data) => {
    const response = await api.put("/users/profile", data, token());
    return response.data;
};
import axios from "axios";

const api = axios.create({
    baseURL: "https://customer-registry-demo.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("product-management-user-data");

  if (userInfo) {
    const { token } = JSON.parse(userInfo);

    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }

  return config;
});

export default api;

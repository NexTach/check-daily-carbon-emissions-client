import axios from "axios";

export const BASE_URL = import.meta.env.PROD
  ? "https://check-daily-carbon-emissions-client-ten.vercel.app/api"
  : "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userStr = localStorage.getItem("user");
    const token = userStr ? JSON.parse(userStr).token : null;

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    // config.headers["Access-Control-Allow-Origin"] = "https://check-daily-carbon-emissions-client-ten.vercel.app";
    // config.headers["Access-Control-Allow-Credentials"] = "true";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

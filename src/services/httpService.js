import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: BASE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;

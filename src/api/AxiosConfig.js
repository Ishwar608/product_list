import axios from "axios";

const instance = axios.create({
  // baseURL: `${process.env.APP_BASE_URL}`,
  baseURL: `https://fakestoreapi.com`,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;

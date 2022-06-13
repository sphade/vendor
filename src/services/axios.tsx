import Axios from "axios";
const baseUrl = "https://test-api.sytbuilder.com/";
const axios = Axios.create({
  baseURL: baseUrl,
});
axios.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("key");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axios;

import Axios from "axios";
import { useAppStorage } from "../hooks";
const baseUrl = process.env.REACT_APP_BASE_URL 
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 3 * 60 * 1000, // Set timeout at 3 minutes
});

axios.interceptors.request.use(async (config: any) => {
  const { getFromStore } = useAppStorage();
  const user = (await getFromStore("user")) || {};
  const token = user?.token || "";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axios;

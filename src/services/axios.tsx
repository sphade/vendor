import Axios from "axios";
// import localforage from "localforage";
import { useAppStorage } from "../hooks";
const baseUrl = "https://bossbus-premium-api-staging.herokuapp.com/api/v1/";
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
// axios.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       localforage.clear();
//     }
//   }
// );
export default axios;

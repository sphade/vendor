import axios from "./axios";

export const loginUser = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/login", data);
  return response.data.data;
};
export const getOverview = async () => {
  const response = await axios.get("vendor/overview");
  return response.data.data;
};
export const getOverviewTable = async () => {
  const response = await axios.get("vendor/aircraft/table");
  return response.data.data;
};
export const getVendorAircraft = async () => {
  const response = await axios.get("vendor/aircraft");
  return response.data.data;
};
export const createAircraft = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/aircraft", data);
  return response.data.data;
};

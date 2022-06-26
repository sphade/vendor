import axios from "./axios";

export const loginUser = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/login", data);
  return response.data.data;
};
export const resendVerifyOtp = async (data: Record<string, unknown>) => {
  const response = await axios.post("user/resend-verify-otp", data);
  return response.data.data;
};
export const signup = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/signup", data);
  return response.data.data;
};
export const createVendor = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/create", data);
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
export const getVendorAircraft = async ({ isArchived, category }: any) => {
  const response = await axios.get("vendor/aircraft", {
    params: {
      isArchived,
      category,
    },
  });
  return response.data.data;
};
export const createAircraft = async (data: Record<string, unknown>) => {
  const response = await axios.post("vendor/aircraft", data);
  return response.data.data;
};
export const forgotPassword = async (data: Record<string, unknown>) => {
  const response = await axios.post("user/forget-password", data);
  return response.data.data;
};
export const getVendorBooking = async () => {
  const response = await axios.get("vendor/orders");
  return response.data.data;
};
export const getUser = async () => {
  const response = await axios.get("user/profile");
  return response.data.data;
};
export const getTransaction = async () => {
  const response = await axios.get("vendor/transactions");
  return response.data.data;
};
export const archiveAircraft = async (id: Record<string, unknown>) => {
  const response = await axios.patch(`vendor/aircraft/${id}/archive`);
  return response.data.data;
};
export const editAircraft = async (
  id: Record<string, unknown>,
  data: Record<string, unknown>
) => {
  const response = await axios.patch(`products/aircraft/${id}`, data);
  return response.data.data;
};
export const updateProfilePicture = async (data: Record<string, unknown>) => {
  const response = await axios.post(`user/photo`, data);
  return response.data.data;
};
export const RequestUpdatePhoneNumberOtp = async (
  data: Record<string, unknown>
) => {
  const response = await axios.post(`user/change-phone-otp`, data);
  return response.data.data;
};
export const RequestUpdateEmailOtp = async (data: Record<string, unknown>) => {
  const response = await axios.post(`user/change-email-otp`, data);
  return response.data.data;
};
export const changePhoneNumber = async (data: Record<string, unknown>) => {
  const response = await axios.patch(`user/change-phone`, data);
  return response.data.data;
};
export const changeEmail = async (data: Record<string, unknown>) => {
  const response = await axios.patch(`user/change-email`, data);
  return response.data.data;
};
export const checkAircraftAvailability = async (
  id: Record<string, unknown>
) => {
  const response = await axios.patch(
    `vendor/aircraft/${id}/check-availability`
  );
  return response.data.data;
};
export const listAircraftForPooling = async (
  id: Record<string, unknown>,
  data: Record<string, unknown>
) => {
  const response = await axios.post(`/list-pooling/aircraft/${id}`, data);
  return response.data.data;
};

import { useMutation, useQueryClient } from "react-query";
import {
  archiveAircraft,
  createAircraft,
  createVendor,
  loginUser,
  resendVerifyOtp,
  signup,
  RequestUpdateEmailOtp,
  changeEmail,
  updateProfilePicture,
  editAircraft,
  forgotPassword,
  resetPassword,
  setAircraftMaintenance,
  toggleAircraftStatus,
  updateBusinessInfo,
  RequestUpdatePhoneNumberOtp,
  changePhoneNumber,
  changePassword,
  deleteAircraft,
  getHelp,
  editAircraftImage,
  deleteAircraftImage,
} from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import localforage from "localforage";



export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/overview";
  return useMutation(loginUser, {
    async onSuccess(data) {
      localforage.setItem("user", data);
      
      navigate(origin, { replace: true });
      enqueueSnackbar(" successfully login", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};

export const useSignup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(signup, {
    onSuccess(data) {
      navigate("/verify/email");
      enqueueSnackbar(" successful", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};
export const useEmailOtp = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(RequestUpdateEmailOtp, {
    onSuccess(data) {
      enqueueSnackbar(" check your email for otp", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};
export const useChangeEmail = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  
  return useMutation(changeEmail, {
    onSuccess(data) {
      enqueueSnackbar(" email has been changed", {
        variant: "success",
      });
      // dispatch(toggleEmailVerificationModal())
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};

export const useCreateVendor = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(createVendor, {
    onSuccess(data) {
      navigate("/verify/account-created");
      // enqueueSnackbar(" successful", {
      //   variant: "success",
      // });
      // oddprowax@hamham.uk
      // vendortesting
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};

export const useResendVerifyOtp = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(resendVerifyOtp, {
    onSuccess(data) {
      navigate("/verify/email");
      enqueueSnackbar(
        data.message || "Check email and phone for verification otp",
        {
          variant: "success",
        }
      );
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};

export const useForgotPasswordSendCode = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  return useMutation(forgotPassword, {
    async onSuccess(data) {
      navigate('/forgot-password/otp');
      
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};
export const useResetPassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  return useMutation(resetPassword, {
    async onSuccess(data) {
      navigate('step-4');
      
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {},
  });
};

export const useCreateAircraft = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(createAircraft, {
    onSuccess(data) {
      enqueueSnackbar("Aircraft successfully created", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("overview");

      queryClient.invalidateQueries("aircraft");
    },
  });
};
export const useEditAircraft = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(editAircraft, {
    onSuccess(data) {
      enqueueSnackbar("Aircraft edited successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
      queryClient.invalidateQueries("aircraftDetails");


    },
  });
};
export const useEditAircraftImages = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(editAircraftImage, {
    onSuccess(data) {
      enqueueSnackbar("image uploaded successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
      queryClient.invalidateQueries("aircraftDetails");

    },
  });
};
export const useDeleteAircraftImages = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(deleteAircraftImage, {
    onSuccess(data) {
      enqueueSnackbar("image deleted successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
      queryClient.invalidateQueries("aircraftDetails");

    },
  });
};
export const useDeleteAircraft = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(deleteAircraft, {
    onSuccess(data) {
      enqueueSnackbar("Aircraft deleted successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");

    },
  });
};
export const useArchiveAircraft = (id) => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(() => archiveAircraft(id), {
    onSuccess(data) {
      // enqueueSnackbar("Aircraft unArchived successfully", {
      //   variant: "success",
      // });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
      queryClient.invalidateQueries("overview");
    },
  });
};
export const useChangeProfilePicture = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(updateProfilePicture, {
    onSuccess(data) {
      enqueueSnackbar("image upload successful", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};
export const useSetMaintenance = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(setAircraftMaintenance, {
    onSuccess(data) {
      enqueueSnackbar("maintenance date set successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
    },
  });
};
export const useToggleStatus = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(toggleAircraftStatus, {
    onSuccess(data) {
      enqueueSnackbar("maintenance date set successfully", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("aircraft");
    },
  });
};
export const useUpdateBusinessInfo = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(updateBusinessInfo, {
    onSuccess(data) {
      enqueueSnackbar("successful", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};
export const useRequestNumberOtp = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(RequestUpdatePhoneNumberOtp, {
    onSuccess(data) {
      enqueueSnackbar("check sms for otp", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};
export const useChangeNumber = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(changePhoneNumber, {
    onSuccess(data) {
      enqueueSnackbar("phone number has been updated", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};
export const useChangePassword = () => {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(changePassword, {
    onSuccess(data) {
      enqueueSnackbar("password has been updated", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
    onSettled() {
      queryClient.invalidateQueries("user");
    },
  });
};
export const useGetHelp = () => {
 

  const { enqueueSnackbar } = useSnackbar();

  return useMutation(getHelp, {
    onSuccess(data) {
      enqueueSnackbar("sent", {
        variant: "success",
      });
    },
    onError(error) {
      enqueueSnackbar(error.response?.data?.error || error.message, {
        variant: "error",
      });
    },
   
  });
};

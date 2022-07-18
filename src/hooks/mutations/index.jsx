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
} from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import localforage from "localforage";
import { useDispatch } from "react-redux";
import { toggleEmailVerificationModal } from "../../redux/slices/ModalSlice";

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
  const dispatch = useDispatch();
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

  return useMutation(loginUser, {
    async onSuccess(data) {
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
    onSettled() {},
  });
};

export const useCreateAircraft = () => {
  const { enqueueSnackbar } = useSnackbar();

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
    onSettled() {},
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
      queryClient.invalidateQueries("aircraftArchive");
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

import { useMutation, useQueryClient } from "react-query";
import { createAircraft, loginUser } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import useAppStorage from "../useAppStorage";

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { addToStore } = useAppStorage();
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/overview";
  return useMutation(loginUser, {
    async onSuccess(data) {
      await addToStore("user", data);
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


export const useForgotPasswordSendCode = () => {
  const { enqueueSnackbar } = useSnackbar();
 

  const navigate = useNavigate();
  const { addToStore } = useAppStorage();
 
  return useMutation(loginUser, {
    async onSuccess(data) {
      await addToStore("user", data);
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
  const navigate = useNavigate();

  return useMutation(createAircraft, {
    onSuccess(data) {
      navigate("/aircraft");
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

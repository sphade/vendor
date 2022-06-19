import { useMutation } from "react-query";
import { createAircraft, loginUser } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import useAppStorage from "../useAppStorage";
export const useLogin = () => {
  const navigate = useNavigate();
  const { addToStore } = useAppStorage();
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/overview";
  return useMutation(loginUser, {
    async onSuccess(data) {
      await addToStore("user", data);
      navigate(origin, { replace: true });
    },
    onError() {},
    onSettled() {},
  });
};
export const useCreateAircraft = () => {
  return useMutation(createAircraft, {
    async onSuccess(data) {},
    onError() {},
    onSettled() {},
  });
};

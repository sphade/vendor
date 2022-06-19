import React from "react";
import { Navigate } from "react-router-dom";
import useAppStorage from "./useAppStorage";

const useLogout = () => {
  const { clearStore } = useAppStorage();

  return () => {
    clearStore();
    <Navigate to="/login" />;
  };
};

export default useLogout;

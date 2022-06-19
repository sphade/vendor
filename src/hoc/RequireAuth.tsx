/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useGlobalStoreProvider from "../context";

const RequireAuth = () => {
  const location = useLocation();

  if (true) {
    return <Outlet />;
  }
  return <Navigate to="/register" state={{ from: location }} replace />;
};

export default RequireAuth;

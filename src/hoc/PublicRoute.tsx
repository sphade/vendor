/* eslint-disable react-hooks/exhaustive-deps */
import localforage from "localforage";
import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Loading } from "../components";
const PublicRoute = () => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  useEffect(() => {
    localforage.getItem("user", (err, val) => {
      setUser(val);
      setLoading(false);
    });
  }, []);
    
  if (loading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }
  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default PublicRoute;

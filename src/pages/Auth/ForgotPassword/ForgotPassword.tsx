import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ForgotPassword1 from "./ForgotPassword1";
import ForgotPassword2 from "./ForgotPassword2";
import ForgotPassword3 from "./ForgotPassword3";
import ForgotPassword4 from "./ForgotPassword4";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/forgot-password") {
      navigate("step-1", { replace: true });
    }
  }, [location, navigate]);
  return (
    <Routes>
      <Route path="step-1" element={<ForgotPassword1 />} />
      <Route path="step-2/:option" element={<ForgotPassword2 />} />

      <Route path="step-3" element={<ForgotPassword3 />} />
      <Route path="step-4" element={<ForgotPassword4 />} />
    </Routes>
  );
};

export default ForgotPassword;

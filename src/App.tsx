import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import { useEffect } from "react";
import {
  Aircraft,
  Booking,
  Calender,
  Overview,
  Transactions,
} from "./pages/Dashboard";
import { ForgotPassword, Login, Register } from "./pages/Auth";

function App(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/overview", { replace: true });
    }
  }, [location,navigate]);

  return (
    <div className="">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password/*" element={<ForgotPassword />} />
        </Route>
        {/* protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="aircraft" element={<Aircraft />} />
          <Route path="booking" element={<Booking />} />
          <Route path="calender" element={<Calender />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

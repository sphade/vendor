// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "./app/store";
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
import { ForgotPassword, Login, Register, Verify } from "./pages/Auth";
import Profile from "./pages/Profile";
import GetHelp from "./pages/GetHelp";
// import { ScreenNotSupported } from "./components";

function App(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  // const count = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <div className=" lg:block hiddenw bg-[#E5E5E5] min-h-screen">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password/*" element={<ForgotPassword />} />
            <Route path="verify/*" element={<Verify />} />
          </Route>
          {/* protected routes */}
          <Route element={<DashboardLayout />}>
            <Route path="overview" element={<Overview />} />
            <Route path="aircraft/*" element={<Aircraft />} />
            <Route path="booking/*" element={<Booking />} />
            <Route path="calender" element={<Calender />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="get-help" element={<GetHelp />} />
          {/* <Route path="*" element={<h1>page not found</h1>} /> */}
        </Routes>
      </div>
      {/* <ScreenNotSupported /> */}
    </>
  );
}

export default App;

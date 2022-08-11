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
  // Transactions,
} from "./pages/Dashboard";
import { ForgotPassword, Login, Register, Verify } from "./pages/Auth";
import Profile from "./pages/Profile";
import GetHelp from "./pages/GetHelp";
import RequireAuth from "./hoc/RequireAuth";
import PublicRoute from "./hoc/PublicRoute";
import { DeleteModal } from "./components";
// import { ScreenNotSupported } from "./components";
//import useMediaQuery from '@mui/material/useMediaQuery';

function App(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  //const matches = useMediaQuery('(min-width:600px)');
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/overview", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
          <DeleteModal />
      <div className=" lg:block hiddenw bg-[#F2F2F2] min-h-screen">
        <Routes>
          {/* public routes */}

          <Route element={<PublicRoute />}>
            <Route element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password/*" element={<ForgotPassword />} />
              <Route path="verify/*" element={<Verify />} />
            </Route>
          </Route>
          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route element={<DashboardLayout />}>
              <Route path="overview/*" element={<Overview />} />
              <Route path="aircraft/*" element={<Aircraft />} />
              <Route path="booking/*" element={<Booking />} />
              <Route path="calender" element={<Calender />} />
              {/* <Route path="transactions" element={<Transactions />} /> */}
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="get-help" element={<GetHelp />} />
          </Route>

          {/* <Route path="*" element={<h1>page not found</h1>} /> */}
        </Routes>
      </div>
      {/* <ScreenNotSupported /> */}
    </>
  );
}

export default App;

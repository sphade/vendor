import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";

import { Aircraft, Booking, Calender, Overview } from "./pages/Dashboard";
import { ForgotPassword, Login, Register, Verify } from "./pages/Auth";
import Profile from "./pages/Profile";
import GetHelp from "./pages/GetHelp";
import RequireAuth from "./hoc/RequireAuth";
import PublicRoute from "./hoc/PublicRoute";
import { DeleteModal } from "./components";
import { ScreenNotSupported } from "./components";
import useMediaQuery from "@mui/material/useMediaQuery";

function App(): JSX.Element {
  const matches = useMediaQuery("(min-width:1100px)");

  return matches ? (
    <>
      <DeleteModal />
      <div className=" block  bg-[#F2F2F2] min-h-screen">
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
              <Route path="/" element={<Navigate to="overview/" replace />} />
              <Route path="overview/*"  element={<Overview />} />
              <Route path="aircraft/*" element={<Aircraft />} />
              <Route path="booking/*" element={<Booking />} />
              <Route path="calender" element={<Calender />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="get-help" element={<GetHelp />} />
          </Route>
          {/*  page not found */}

          <Route path="*" element={<Navigate to="overview/" replace />} />
        </Routes>
      </div>
    </>
  ) : (
    <ScreenNotSupported />
  );
}

export default App;

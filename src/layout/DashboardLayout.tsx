import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Sidebar />
      <main className="ml-5 flex-1 pt-10 px-5 bg-secondary ">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollRestoration = "scrollRestoration" in window.history;
    if (scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    
      <div className="flex bg-[#F2F2F2] min-h-screen">
        <Sidebar />
        <main className="ml-5 flex-1 pt-10 px-5 bg-secondary ">
          <Outlet />
        </main>
      </div>
    
  );
};

export default DashboardLayout;

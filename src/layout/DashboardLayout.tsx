import React, { FC } from "react";
import Sidebar from "../components/Sidebar";
import IProps from "./interface";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Sidebar />
      <main className="ml-5 flex-1 ">
        <Outlet  />
      </main>
    </div>
  );
};

export default DashboardLayout;

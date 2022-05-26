import React from "react";
import { Info, MaintenanceForm, NotificationProfileHeader } from "../../../components";

const Calender = () => {
  return (
    <div className="mb-10">
      <header className="header mb-12">
        <h1 className="header-heading">Transaction</h1>
        <NotificationProfileHeader />
      </header>
      <div className="flex gap-5 ">
        <div className="p-5 sticky top-10 bg-blue-50 h-fit  text-gray-700 rounded-lg w-[280px] ">
          Set service date for a particular aircraft and let your customers know
          about it’s unavailability by toggling active or inactive on the
          dashboard.
        </div>
        <MaintenanceForm/>
      </div>
    </div>
  );
};

export default Calender;

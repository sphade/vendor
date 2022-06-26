import React from "react";

const NoAircraft = () => {
  return (
    <div className=" h-[400px] center-element w-full flex-col gap-5">
      <h1 className="font-hindBold font-semibold text-4xl capitalize">
        no aircraft
      </h1>
      <p className=" text-gray-700 text-center">
        You currently have no aircraft. consider creating an aircraft to begin.
      </p>
    </div>
  );
};

export default NoAircraft;

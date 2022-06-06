import React from "react";

const Otp = () => {
  return (
    <div className="flex ">
      <input
        type="text"
        className=" w-[48px] h-[48px] rounded-lg p-2 text-center border border-gray-500 focus:border-gray-500 outline-none"
        maxLength={1}
      />
    </div>
  );
};

export default Otp;

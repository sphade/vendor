import React from "react";
import { Link } from "react-router-dom";
import { Button, CheckBox } from "../../../components";

const ForgotPassword1 = () => {
  return (
    <div className="w-[670px] px-[140px] py-[50px]  bg-secondary rounded-md shadow-gray-200 shadow-lg space-y-5">
      <div className="ml-3 space-y-3">
        <h1 className=" uppercase text-lg font-bold ">forgot password</h1>
        <p className="text-base text-gray-600">
          Choose recovery password option
        </p>
      </div>

      <form className="">
        <CheckBox label="Email" id="email" />
        <CheckBox label="Phone Number" id="phone" />
      </form>
      <Link to="/forgot-password/step-2">
        <Button full variant="tertiary">
          confirm
        </Button>
      </Link>
    </div>
  );
};

export default ForgotPassword1;

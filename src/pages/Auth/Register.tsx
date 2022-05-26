import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckBox, PasswordInput, Button } from "../../components";
import { CameraBoxIcon, CameraIcon } from "../../assets/images/icons";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
const Register = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="w-[664px] px-[100px] rounded-lg shadow-lg  mb-[100px] py-10 border  relative   bg-secondary">
      <div className="mb-10 text-center">
        <h1 className="text-tertiary  uppercase text-lg font-bold mb-10">
          Sign Up
        </h1>

        <div className=" relative h-[100px] ">
          <img
            src={CameraBoxIcon}
            alt={CameraBoxIcon}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={CameraIcon}
            alt={CameraIcon}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center justify-center gap-2 text-blue-600 text-xs">
          <AddCircleOutlineOutlined color="primary" fontSize="medium" />
          <span className="font-semibold  uppercase">add business logo</span>
        </div>
      </div>

      <form className="space-y-4">
        <TextField fullWidth label="Business Name" type={"text"} />
        <TextField fullWidth label="Email Address" type={"email"} />
        <PhoneInput
          country={"ng"}
          value={phone}
          placeholder="phonenumber"
          enableSearch={true}
          containerClass="w-full "
          inputClass="w-full "
          onChange={(phone) => setPhone(phone)}
        />
        <TextField fullWidth label="Business Address" type={"email"} />
        <PasswordInput />
        <PasswordInput />
        <div className="flex items-center justify-between w-full gap-3">
          <CheckBox />
          <p className="text-sm ">
            By creating a Bossbus Premium Account, I understand and agree to
            Bossbus’s Privacy Notice and Terms of Use
          </p>
        </div>
        <div className="pt-5">
          <Button full variant="primary">
            sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;

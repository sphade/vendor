import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

const ForgotPassword1 = () => {
  const [value, setValue] = React.useState("email");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className="w-[670px] px-[140px] py-[50px]  bg-secondary rounded-lg shadow-gray-200 shadow-lg space-y-5">
      <div className="ml-3 space-y-3">
        <h1 className=" uppercase text-lg font-bold ">forgot password</h1>
        <p className="text-base text-gray-600">
          Choose recovery password option
        </p>
      </div>

      <form className="!mb-5">
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="email"
          name="radio-buttons-group"
          onChange={handleChange}
          value={value}
        >
          <FormControlLabel
            value="email"
            control={
              <Radio
                sx={{
                  color: "#FF481A",
                  "&.Mui-checked": {
                    color: "#FF481A",
                  },
                }}
              />
            }
            label="email"
            sx={{
              color: "GrayText",
            }}
          />
          <FormControlLabel
            value="phoneNumber"
            control={
              <Radio
                sx={{
                  color: "#FF481A",
                  "&.Mui-checked": {
                    color: "#FF481A",
                  },
                }}
              />
            }
            label="phone number"
            sx={{
              color: "GrayText",
            }}
          />
        </RadioGroup>
      </form>
      <Link to={`/forgot-password/step-2/${value}`}>
        <Button full variant="tertiary">
          confirm
        </Button>
      </Link>
    </div>
  );
};

export default ForgotPassword1;

import React from "react";
import { Checkbox } from "@mui/material";

const CheckBox = ({
  label,
  id,
  size = 28,
}: {
  label?: string;
  id?: string;
  size?: number;
}) => {
  return (
    <div>
      <Checkbox id={id} sx={{ "& .MuiSvgIcon-root": { fontSize: size, } }}  />
      <label htmlFor={id} className="capitalize text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;

import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { EyeCloseIcon, EyeIcon } from "../assets/images/icons";

const PasswordInput = ({ placeholder }: { placeholder?: string }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <TextField
      label={placeholder}
      fullWidth
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" className="cursor-pointer">
            <IconButton
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <img
                  src={EyeIcon}
                  alt={EyeIcon}
                  className="w-[25px] h-[25px] "
                />
              ) : (
                <img
                  src={EyeCloseIcon}
                  alt={EyeCloseIcon}
                  className="w-[25px] h-[25px]"
                />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;

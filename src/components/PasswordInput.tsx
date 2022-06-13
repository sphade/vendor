import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import { EyeCloseIcon, EyeIcon } from "../assets/images/icons";

const PasswordInput = ({
  control,
  name,
  label,
  placeholder,
  rules,
}: {
  control?: any;
  name?: any;
  label?: string;
  placeholder?: string;
  rules?: {};
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name: name,
    control,
    rules: rules,
    defaultValue: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div>
      <TextField
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        inputRef={ref}
        error={invalid}
        helperText={invalid && error?.message}
        type={showPassword ? "text" : "password"}
        fullWidth
        label={label}
        autoComplete="current-password"
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
    </div>
  );
};

export default PasswordInput;

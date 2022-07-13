import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const SelectInput = ({
  className,
  control,
  size = "medium",
  options,
  label,
  name,
  rules,
  defaultValue,
}: {
  className?: string;
  control?: any;
  size?: "medium" | "small";
  options?: { value: string | number; name: string | number }[];
  label?: string;
  name?: any;
  rules?: any;
  defaultValue?: any;
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name: name,
    control,
    rules: rules,
  });

  return (
    <TextField
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      name={name} // send down the input name
      inputRef={ref}
      error={invalid}
      helperText={invalid && error?.message}
      select
      id="demo-controlled-open-select"
      label={label}
      className={className}
      fullWidth
      size={size}
      defaultValue={defaultValue}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options?.map(({ value, name }) => (
        <MenuItem key={name} value={value}>
          {name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;

import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import { TextField } from "@mui/material";

export default function ControlledOpenSelect({
  className,
  size,
  options,
  label
}: {
  className?: string;
  size?: "small" | "medium";
  options?: {
    value: string | number;
    name: string | number;
    }[];
  label?:string
}) {
  const [value, setValue] = React.useState<string | number>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      select
      id="demo-controlled-open-select"
      value={value}
      label={label}
      onChange={handleChange}
      className={className}
      fullWidth
      size={size}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options?.map(({ value, name }) => (
        <MenuItem value={value}>{name}</MenuItem>
      ))}
    </TextField>
  );
}

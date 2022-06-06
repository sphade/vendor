import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import { TextField } from "@mui/material";

export default function ControlledOpenSelect({
  className,
  size,
}: {
  className?: string;
  size?: "small" | "medium";
}) {
  const [age, setAge] = React.useState<string | number>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  return (
    <TextField
      select
      id="demo-controlled-open-select"
      value={age}
      label="Age"
      onChange={handleChange}
      className={className}
      fullWidth
      size={size}
     
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </TextField>
  );
}

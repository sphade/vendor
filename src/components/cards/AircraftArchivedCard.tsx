import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import AircraftCard from "./AircraftCard";

const AircraftArchivedCard = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="flex gap-4 items-start">
      <Checkbox checked={checked} onChange={handleCheckChange} />
      <AircraftCard />
    </div>
  );
};

export default AircraftArchivedCard;

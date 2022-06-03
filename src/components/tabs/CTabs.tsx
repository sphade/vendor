import { Tab, Tabs } from "@mui/material";
import React from "react";

const CTabs = ({
  tabLabel,
  value,
  setValue,
}: {
  tabLabel: {}[];
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        {tabLabel.map(({ label }: { label?: string },id) => (
          <Tab label={label} key={ id}/>
        ))}
      </Tabs>
    </>
  );
};

export default CTabs;

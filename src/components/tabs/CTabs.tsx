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
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        {tabLabel.map(({ label }: { label?: string }) => (
          <Tab label={label} />
        ))}
      </Tabs>
    </>
  );
};

export default CTabs;

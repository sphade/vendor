import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setAirCraftTab } from "../../redux/slices/TabSlice";


const CTabs = ({
  tabLabel,
  value,
  setValue,
}: {
  tabLabel: {}[];
  value: number;
  setValue: any
}) => {
  const dispatch =  useDispatch()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setValue(newValue))
   
  };
  return (
    <>
      <Tabs value={value}  onChange={handleChange}>
        {tabLabel.map(({ label }: { label?: string },id) => (
          <Tab label={label} key={ id}/>
        ))}
      </Tabs>
    </>
  );
};

export default CTabs;

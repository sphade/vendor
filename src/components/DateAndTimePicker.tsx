import { CalenderIcon } from "../assets/images/icons";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {  useState } from "react";

import { format } from "date-fns";


const DateAndTimePicker = ({ date,setDate }:any) => {

  const [open, setOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        onClick={() => setOpen(true)}
        className="border divide-x divide-[#828282] cursor-pointer w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
        <MobileDatePicker
          label={"label"}
          inputFormat="dd/MM/yyyy"
          value={date}
          open={open}
          minDate={new Date()}
          onChange={(newValue) => {
            setDate(newValue);
           
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={() => (
            <div
              className="flex gap-2 items-center pr-6"
              
            >
              <img src={CalenderIcon} alt="icon" />
              <p className="capitalize text-base">
                {format(date, "dd/MMM/yyyy") || "departure date"}
              </p>
            </div>
          )}
        />
     
      </div>
    </LocalizationProvider>
  
  );
};

export default DateAndTimePicker;

import { CalenderIcon, ClockIcon } from "../assets/images/icons";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers";
const DateAndTimePicker = ({
  date,
  time,
}: {
  date?: string;
  time?: string;
}) => {
  const [value, setValue] = useState<Date | null | string>(null);
  const [open, setOpen] = useState(false);
  return (
    <div className="border divide-x divide-[#828282] cursor-pointer w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label={"label"}
          inputFormat="dd/MM/yyyy"
          value={value}
          open={open}
          minDate={new Date()}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(value);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={() => (
            <div
              className="flex gap-2 items-center pr-6"
              onClick={() => setOpen(true)}
            >
              <img src={CalenderIcon} alt="icon" />
              <p className="capitalize text-base">
                {value?.toString() || "departure date"}
              </p>
            </div>
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
      <div className="flex gap-2 items-center pl-6">
        <img src={ClockIcon} alt="icon" />
        <p className=" text-base">{time}</p>
      </div>
    </div>
    //   renderInput={(params) =>     <div className="flex gap-2 items-center pr-6">
    //   <img src={CalenderIcon} alt="icon" />
    //   <p className="capitalize text-base">{date || "departure date"}</p>
    // </div>}
  );
};

export default DateAndTimePicker;

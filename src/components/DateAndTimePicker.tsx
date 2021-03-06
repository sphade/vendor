import { CalenderIcon, ClockIcon } from "../assets/images/icons";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { InputAdornment, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";

const DateAndTimePicker = ({ date }: { date?: string }) => {
  const [value, setValue] = useState<any>(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<any>(new Date());
  const [openTime, setOpenTime] = useState(false);
  const clockElement = useRef<any>();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="border divide-x divide-[#828282] cursor-pointer w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
        <MobileDatePicker
          label={"label"}
          inputFormat="dd/MM/yyyy"
          value={value}
          open={open}
          minDate={new Date()}
          onChange={(newValue) => {
            setValue(newValue);
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
                {format(value, "dd/MMM/yyyy") || "departure date"}
              </p>
            </div>
          )}
        />
        <TimePicker
          label="Time"
          ref={clockElement}
          value={time}
          open={openTime}
          onClose={() => {
            setOpenTime(false);
          }}
          onChange={(value) => {
            setTime(value);
          }}
          renderInput={(params: any) => (
            <div
              className="flex gap-2 items-center pl-6"
              onClick={() => setOpenTime(true)}
              ref={params.inputRef}
            >
              <img src={ClockIcon} alt="icon" />
              <p className=" text-base">
              {format(time, "dd/MMM/yyyy") || "departure time"}
              </p>
            </div>
          )}
        />
      </div>
    </LocalizationProvider>
    //   renderInput={(params) =>     <div className="flex gap-2 items-center pr-6">
    //   <img src={CalenderIcon} alt="icon" />
    //   <p className="capitalize text-base">{date || "departure date"}</p>
    // </div>}
  );
};

export default DateAndTimePicker;

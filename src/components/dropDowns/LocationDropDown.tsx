import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useAirport } from "../../hooks/queries";

const LocationDropDown = ({ Icon, value, setValue, placeHolder }: any) => {
  const airports = useAirport();
  const [el, setEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(el);
  const handleClick = (event: any) => {
    setEl(event.currentTarget);
  };
  const handleClose = () => {
    setEl(null);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="border  max-w-[330px]  cursor-pointer w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] "
      >
        <Icon />
        <p className="capitalize text-base truncate">
          {value?.name || placeHolder}{" "}
        </p>
      </div>
      <Menu
        className="!w-full"
        id="basic-menu"
        anchorEl={el}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          
        }}
      >
        {airports?.data?.map((airport: any) => (
          <MenuItem
            onClick={() => {
              setValue({ name: airport?.name, id: airport?.id });
              handleClose();
            }}
          >
            {airport?.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocationDropDown;

import { Popover } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import dropdownIcon from "../assets/images/icons/dropdown.png";

const ProfileDropDown = ({
  anchorEl,
  setAnchorEl,
}: {
  anchorEl: any;
  setAnchorEl: any;
}) => {
 

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const dropDownItem = [
    {
      name: "profile",
      link: "/profile",
    },
    {
      name: "get help",
      link: "/get-help",
    },
    {
      name: "logout",
      link: "/profile",
    },
  ];
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <ul className="rounded-lg bg-white shadow w-[205px] py-1 border divide-y flex flex-col">
        {dropDownItem.map(({ name, link }, id) => (
          <Link
            to={link}
            key={id}
            className="py-3 capitalize flex items-center justify-between text-sm text-gray-700 cursor-pointer default-transition hover:bg-gray-100 px-2"
          >
            {name}
            <img src={dropdownIcon} className="-rotate-90" alt={dropdownIcon} />
          </Link>
        ))}
      </ul>
    </Popover>
  );
};

export default ProfileDropDown;

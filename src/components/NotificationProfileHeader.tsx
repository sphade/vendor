import React, { useRef, useState } from "react";
import notificationIcon from "../assets/images/icons/notification.png";
import { IconButton } from "@mui/material";
import avatarIcon from "../assets/images/icons/avatar.png";
import dropdownIcon from "../assets/images/icons/dropdown.png";
import { Avatar } from "@mui/material";
import ProfileDropDown from "./ProfileDropDown";
import { useClickAway } from "react-use";
const NotificationProfileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (event: { currentTarget: any }) => {
    setOpen(!open);

    console.log(
      "🚀 ~ file: NotificationProfileHeader.tsx ~ line 14 ~ handleClick ~ open",
      open
    );
  };
  const dropDownRef = useRef(null);
  useClickAway(dropDownRef, () => {
    if (open === true) {
      setOpen(false);
      console.log(
        "🚀 ~ file: NotificationProfileHeader.tsx ~ line 14 ~ handleClick ~ open",
        open
      );
    }
    return;
  });
  return (
    <div className="flex space-x-2 items-center divide-x-2 divide-gray-400 pl-5">
      <img src={notificationIcon} alt="notificationIcon" />

      <div
        ref={dropDownRef}
        className="flex !relative items-center space-x-2 pl-2"
      >
        <Avatar src={avatarIcon} alt="avatarIcon" />
        <div>
          <h3 className="text-tertiary font-semibold text-base">Pioneer Air</h3>
          <p className="text-gray-400 font-medium text-sm">Natash Williams</p>
        </div>
        <IconButton
          className=" !relative"
          component="span"
          onClick={handleClick}
        >
          <img src={dropdownIcon} alt="avatarIcon" className="py-2" />
        </IconButton>
        {open && (
          <div className="absolute top-[45px] right-[10px]">
            <ProfileDropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationProfileHeader;

import React, { useState } from "react";
import notificationIcon from "../assets/images/icons/notification.png";
import { IconButton, Menu, MenuItem } from "@mui/material";

import avatarIcon from "../assets/images/icons/avatar.png";
import dropdownIcon from "../assets/images/icons/dropdown.png";
import { Avatar } from "@mui/material";
const NotificationProfileHeader = () => {
  const [el, setEl] = useState(null);
  const handleClick = (event: { currentTarget: any }) => {
    setEl(event.currentTarget);
  };
  const open = Boolean(el);
  return (
    <div className="flex space-x-2 items-center divide-x-2 divide-gray-400 pl-5">
      <img src={notificationIcon} alt="notificationIcon" />

      <div className="flex items-center space-x-2 pl-2">
        <Avatar src={avatarIcon} alt="avatarIcon" />
        <div>
          <h3 className="text-tertiary font-semibold text-base">Pioneer Air</h3>
          <p className="text-gray-400 font-medium text-sm">Natash Williams</p>
        </div>
        <IconButton component='span'>

        <img src={dropdownIcon} alt="avatarIcon" className="py-2" onClick={handleClick} />
        </IconButton>

        <Menu
          sx={{ width: 900 }}
          open={open}
          anchorEl={el}
          onClose={() => setEl(null)}
          className="!px-[100px]"
        >
          <MenuItem className="!w-[100px]">
            {" "}
            profile <span>not good</span>
          </MenuItem>
          <MenuItem>get Help</MenuItem>
          <MenuItem>sign Up</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NotificationProfileHeader;

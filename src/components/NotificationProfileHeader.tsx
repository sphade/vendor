import React from "react";
import notificationIcon from "../assets/images/icons/notification.png";
import { IconButton } from "@mui/material";
import dropdownIcon from "../assets/images/icons/dropdown.png";
import { Avatar } from "@mui/material";
import ProfileDropDown from "./dropDowns/ProfileDropDown";
import localforage from "localforage";

const NotificationProfileHeader = () => {
  const [user, setUser] = React.useState<any>();
  localforage.getItem("user", (err, val) => setUser(val));

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="flex space-x-2 items-center divide-x-2 divide-gray-400 pl-5">
      <img src={notificationIcon} alt="notificationIcon" />

      <div className="flex !relative items-center space-x-2 pl-2">
        <Avatar src={user && user.photo} alt={"AvatarIcon"} />
        <div>
          <h3 className="text-tertiary font-semibold font-hindBold text-base">
            {user?.name}
          </h3>
          <p className="text-gray-400 font-medium text-sm">{user?.name}</p>
        </div>
        <IconButton
          className=" !relative"
          component="span"
          onClick={handleIconClick}
        >
          <img src={dropdownIcon} alt="avatarIcon" className="py-2" />
        </IconButton>

        <ProfileDropDown anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </div>
    </div>
  );
};

export default NotificationProfileHeader;

import React, { useEffect } from "react";
import notificationIcon from "../assets/images/icons/notification.png";
import { IconButton, Skeleton } from "@mui/material";
import dropdownIcon from "../assets/images/icons/dropdown.png";
import { Avatar } from "@mui/material";
import ProfileDropDown from "./dropDowns/ProfileDropDown";
import localforage from "localforage";
import { useUser } from "../hooks/queries";

const NotificationProfileHeader = () => {
  const [offlineUser, setOfflineUser] = React.useState<any>();
  useEffect(() => {
    localforage.getItem("user", (err, val) => setOfflineUser(val));
  }, []);
  const user = useUser();
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
        {user.isLoading ? (
          <Skeleton variant="circular" width={40} height={40} />
        ) : (
          <Avatar
            src={user.data?.logo || offlineUser?.photo}
            alt={user.data?.business_name || offlineUser?.name}
          />
        )}
        <div>
          <h3 className="text-tertiary font-semibold    text-base">
            {user.isLoading ? (
              <Skeleton variant="text" width={70} />
            ) : (
              user.data?.business_name || offlineUser?.name
            )}
          </h3>
          <p className="text-gray-400 font-medium text-sm">
            {" "}
            {user.isLoading ? (
              <Skeleton variant="text" width={70} />
            ) : (
              user.data?.business_name || offlineUser?.name
            )}
          </p>
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

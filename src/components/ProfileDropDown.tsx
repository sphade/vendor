import { Popover } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ArrowRightSmallIcon } from "../assets/images/icons";
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
      link: "/login",
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
      <ul className="rounded-lg bg-white  w-[205px] py-1 border divide-y flex flex-col">
        {dropDownItem.map(({ name, link }, id) => (
          <Link
            to={link}
            key={id}
            className={classNames(
              "py-3 capitalize flex items-center justify-between text-sm font-semibold text-gray-700 cursor-pointer default-transition hover:bg-gray-100 px-5",
              {
                "!text-primary": name === "logout",
              }
            )}
          >
            {name}
            {name === "logout" ? (
              ""
            ) : (
              <img src={ArrowRightSmallIcon} alt={ArrowRightSmallIcon} />
            )}
          </Link>
        ))}
      </ul>
    </Popover>
  );
};

export default ProfileDropDown;

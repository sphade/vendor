import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOrangeIcon, DotIcon } from "../../assets/images/icons";
import jetPic from "../../assets/images/icons/plane.png";
import AircraftCardDropDown from "../dropDowns/AircraftCardDropDown";

const AircraftCard = () => {
  const [dropDownState, setDropDownState] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropDownState(event.currentTarget);
  };
  return (
    <div className="w-64 border rounded-md shadow-lg  p-2 bg-secondary">
      <div className=" rounded-t-md h-[100px] overflow-hidden">
        <img src={jetPic} alt="jetPic" className="" />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-2 justify-between">
          <h3 className="text-tertiary font-semibold capitalize text-base">
            Night Sky 6000
          </h3>
          <IconButton onClick={handleClick}>
            <img src={DotIcon} alt="DotIcon" className="py-2 " />
          </IconButton>
          <AircraftCardDropDown
            dropDownState={dropDownState}
            setDropDownState={setDropDownState}
          />
        </div>
        <div className="py-2 space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <p>Service type :</p> <p> Aircraft type :</p>
          </div>
          <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
            <p>charter</p> <p> Private Jet</p>
          </div>
        </div>

        <div className="py-4 center-element flex-col space-y-1">
          <p className="text-gray-400 text-xs capitalize">seat capacity:</p>
          <p className="text-tertiary font-semibold">20</p>
        </div>
        <div className="center-element py-4">
          <Link to="details">
            <button className="uppercase py-2 px-4 gap-2 shadow bg-orange-50 rounded-md text-primary font-bold text-sm w-[95px] flex items-center">
              more
              <img src={ArrowRightOrangeIcon} alt="ArrowRightOrangeIcon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AircraftCard;

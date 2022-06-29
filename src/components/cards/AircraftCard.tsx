import { IconButton } from "@mui/material";
import localforage from "localforage";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOrangeIcon, DotIcon } from "../../assets/images/icons";
import AircraftCardDropDown from "../dropDowns/AircraftCardDropDown";

const AircraftCard = (props: any) => {
  const [dropDownState, setDropDownState] =
    React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    localforage.setItem("selectedAircraft", props);
    setDropDownState(event.currentTarget);
  };
  return (
    <div className="w-64 border rounded-md shadow-lg  p-2 bg-secondary">
      <div className=" rounded-t-md h-[100px] overflow-hidden">
        <img src={props.ProductImages[0].url} alt="jetPic" className="bg-gray-300" />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-2 justify-between">
          <h3 className="text-[#1E1E1E] font-semibold font-hindBold capitalize text-base">
          {props?.brand} {props?.model}
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
          <div className="flex justify-between text-xs text-[#828282]">
            <p>Service type :</p> <p> Aircraft type :</p>
          </div>
          <div className="flex justify-between text-[#1E1E1E] capitalize font-semibold font-hindBold text-sm">
            <p>{props.serviceType}</p> <p>{props.airCraftType}</p>
          </div>
        </div>

        <div className="py-4 center-element flex-col space-y-1">
          <p className="text-[#828282] text-xs capitalize">seat capacity:</p>
          <p className="text-[#1E1E1E] font-semibold font-hindBold">
            {props.capacity}
          </p>
        </div>
        <div className="center-element py-4">
          <Link to={`/aircraft/details`}>
            <button
              onClick={async () => {
                localforage.setItem("aircraftDetails", props);
              }}
              className="uppercase py-2 px-4 gap-2 shadow bg-orange-50 rounded-md text-primary font-bold text-sm w-[95px] flex items-center"
            >
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

import React from "react";
// import bookingPic from "../../assets/images/icons/heli.svg";
import bookingPic from "../../assets/images/plane5.png";
import { ArrowRight2Icon, DotIcon } from "../../assets/images/icons";
import Button from "../Button";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AircraftCardDropDown from "../dropDowns/AircraftCardDropDown";

const BookingCard = () => {
  const [dropDownState, setDropDownState] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropDownState(event.currentTarget);
  };
  return (
    <div className="w-64 min-h-[376px] border rounded-md shadow-lg p-4 bg-secondary  ">
      <div className=" rounded-t-md h-[100px] object-cover overflow-hidden">
        <img src={bookingPic} alt="bookingPic" className="w-full h-full" />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <h3 className="text-tertiary font-hindBold font-semibold capitalize text-base">
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
        <div>
          <div className="py-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Range :</p> <p> Speed :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize font-hindBold font-semibold text-sm">
              <p>6000-90433 tms</p> <p> 600mah</p>
            </div>
          </div>
          <div className=" pb-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Capacity :</p> <p> year :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize font-hindBold font-semibold text-sm">
              <p>16 passengers</p> <p> 2016</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-between items-center pt-5">
          <Button variant="outlinePrimary" size="medium">
            details
          </Button>
          <Link to="../form" className="flex-1">
            <Button full size="medium" iconRight={ArrowRight2Icon}>
              book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

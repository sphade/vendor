import React from "react";

import { ArrowRight2Icon, DotIcon } from "../../assets/images/icons";
import Button from "../Button";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AircraftCardDropDown from "../dropDowns/AircraftCardDropDown";
import localforage from "localforage";

const BookingCard = (props: any) => {
  const [dropDownState, setDropDownState] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    localforage.setItem("selectedAircraftDetails", props);

    setDropDownState(event.currentTarget);
  };
  return (
    <div className="w-64 h-[400px] border rounded-md  p-4 bg-secondary  ">
      <div className=" rounded-t-md h-[100px] object-cover overflow-hidden">
        <img
          src={props?.ProductImages[0]?.url}
          alt="bookingPic"
          className="w-full h-full object-cover bg-gray-200"
        />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <h3 className="text-tertiary    font-semibold capitalize text-base">
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
        <div>
          <div className="py-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Range :</p> <p> Speed :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize    font-semibold text-sm">
              <p>{props?.maxRange} tms</p> <p>{props?.maxSpeed} mah</p>
            </div>
          </div>
          <div className=" pb-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Capacity :</p> <p> year :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize    font-semibold text-sm">
              <p>{props?.capacity} passengers</p> <p> {props?.year}</p>
            </div>
          </div>
        </div>

    
        <div className="flex justify-between gap-3  items-center pt-5">
          <Link to='/aircraft/details' >
           <Button variant="outlinePrimary" onClick={async () => {
                localforage.setItem("selectedAircraftDetails", props);
              }} size="medium">
            details
          </Button>
          </Link>
         
          
          <Link to="../form" className="flex-1">
            <Button full size="medium" iconRight={ArrowRight2Icon}
             onClick={async () => {
              localforage.setItem("selectedAircraftDetails", props);
            }}
            >

              book
            </Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

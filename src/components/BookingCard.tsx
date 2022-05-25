import React from "react";
import bookingPic from "../assets/images/icons/heli.svg";
import dot from "../assets/images/icons/dot.svg";
import Button from "./Button";

const BookingCard = () => {
  return (
    <div className="w-64 min-h-[376px] rounded-md shadow p-4 bg-secondary">
      <div className=" rounded-t-md h-[100px] object-cover overflow-hidden">
        <img src={bookingPic} alt={bookingPic} className="w-full h-full" />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <h3 className="text-tertiary font-semibold capitalize text-base">
            Night Sky 6000
          </h3>
          <img src={dot} alt={dot} />
        </div>
        <div>
          <div className="py-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Range :</p> <p> Speed :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
              <p>6000-90433 tms</p> <p> 600mah</p>
            </div>
          </div>
          <div className=" pb-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <p>Capacity :</p> <p> year :</p>
            </div>
            <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
              <p>16 passengers</p> <p> 2016</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-5">
          <Button variant="outlinePrimary" size="small">
            details
          </Button>
          <Button size="medium" variant="primary" iconRight=">>">
            book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

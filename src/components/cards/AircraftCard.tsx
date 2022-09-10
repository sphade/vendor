import { IconButton } from "@mui/material";
import localforage from "localforage";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowRightOrangeIcon, DotIcon } from "../../assets/images/icons";
import { setAircraftDetails } from "../../redux/slices/AircraftDetailsSlice";
import AircraftCardDropDown from "../dropDowns/AircraftCardDropDown";

const AircraftCard = (props: any) => {
  const dispatch = useDispatch()
  const [dropDownState, setDropDownState] =
    React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setAircraftDetails(props))
    localforage.setItem("selectedAircraftDetails", props);
    setDropDownState(event.currentTarget);
  };
  return (
    <div className="w-64 h-fit border rounded-md   p-2 bg-secondary">
      
      <div className=" rounded-t-md h-[100px] overflow-hidden">
        <img
          src={props.ProductImages[0].url}
          alt="jetPic"
          className="bg-gray-200 object-cover w-full h-full"
        />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-2 justify-between">
          <h3 className="text-[#1E1E1E] font-semibold    capitalize text-base">
            {props?.brand} {props?.model}
          </h3>
          <IconButton onClick={handleClick}>
            <DotIcon className=" h-5 w-5" />
          </IconButton>
          <AircraftCardDropDown
            dropDownState={dropDownState}
            setDropDownState={setDropDownState}
            aircraft={props}
          />
        </div>
        <div className="py-2 space-y-2">
          <div className="flex justify-between text-xs text-[#828282]">
            <p>Service type :</p> <p> Aircraft type :</p>
          </div>
          <div className="flex justify-between text-[#1E1E1E] capitalize font-semibold    text-sm">
            <p>{props.serviceType}</p> <p>{props.airCraftType}</p>
          </div>
        </div>

        <div className="py-4 center-element flex-col space-y-1">
          <p className="text-[#828282] text-xs capitalize">seat capacity:</p>
          <p className="text-[#1E1E1E] font-semibold   ">{props.capacity}</p>
        </div>
        <div className="center-element py-4">
          <Link to={`/aircraft/details/${props.id}`}>
            <button
              onClick={async () => {
                localforage.setItem("selectedAircraftDetails", props);
              }}
              className="uppercase py-2 px-4 gap-2  bg-orange-50 rounded-md text-primary font-bold text-sm w-[95px] flex items-center"
            >
              more
              <ArrowRightOrangeIcon/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AircraftCard;

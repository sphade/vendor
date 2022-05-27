import { IconButton } from "@mui/material";
import { DotIcon } from "../../../assets/images/icons";
import jetPic from "../../../assets/images/icons/plane.png";

const JetCard = () => {
  return (
    <div className="w-64 h-[376px] rounded-md shadow p-2 bg-secondary">
      <div className=" rounded-t-md h-[100px] overflow-hidden">
        <img src={jetPic} alt={jetPic} className="" />
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <h3 className="text-tertiary font-semibold capitalize text-base">
            Night Sky 6000
          </h3>
          <IconButton>
            <img src={DotIcon} alt={DotIcon} className="py-3 " />
          </IconButton>
        </div>
        <div className="py-4 space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <p>service Type :</p> <p> Aircraft type :</p>
          </div>
          <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
            <p>charter</p> <p> Private Jet</p>
          </div>
        </div>

        <div className="py-4 center-element flex-col space-y-1">
          <p className="text-gray-400 text-xs capitalize">seat capacity:</p>
          <p className="text-tertiary font-semibold">20</p>
        </div>
        <div className="center-element py-2">
          <button className="uppercase py-2 px-4 bg-orange-50 rounded-md text-primary font-bold text-sm">
            more <span> &gt; </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JetCard;

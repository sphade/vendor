import { Skeleton  } from "@mui/material";
import useFormatNumber from "../../hooks/useFormatNumber";

const ActivitiesCard = ({
  loading,
  revenue,
  booking,
}: {
  loading: boolean;
  revenue: string | number;
  booking: string | number;
}) => {
  const formattedRevenue = useFormatNumber(revenue || 0);

  return (
    <div className="h-[200px] p-5  rounded-lg bg-tertiary  space-y-5">
      <div className=" flex items-center justify-between">
        <p className="text-secondary font-hindBold font-semibold text-base">
          Activities for Last Month
        </p>
      </div>
      <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Total Bookings</p>
        {loading ? (
          <Skeleton  width={30} height={10} className="!bg-slate-100" />
        ) : (
          <span className="text-[#FFC796]"> {booking || 0}</span>
        )}
      </div>

      <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Revenues</p>
        {loading ? (
          <Skeleton  width={30} height={10} className="!bg-slate-100" />
        ) : (
          <span className="text-[#FFC796]"> {formattedRevenue}</span>
        )}
      </div>
      <hr className="text-gray-400" />
      <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Gross Income</p>
        {loading ? (
          <Skeleton  width={30} height={10} className="!bg-slate-100" />
        ) : (
          <span className="text-[#FFC796]"> {formattedRevenue}</span>
        )}
      </div>
    </div>
  );
};

export default ActivitiesCard;

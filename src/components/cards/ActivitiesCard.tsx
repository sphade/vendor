
const ActivitiesCard = () => {
  return (
    <div className="h-[200px] p-5  rounded-lg bg-tertiary  space-y-5">
      <div className=" flex items-center justify-between">
        <p className="text-secondary font-semibold text-base">
          Activities for Last Month
        </p>
      </div>
      <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Total Bookings</p>
        <span className="text-[#FFC796]"> 200</span>
      </div>

      <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Revenues</p>
        <span className="text-[#FFC796]"> 200000</span>
          </div>
          <hr className="text-gray-400"/>
          <div className=" text-xs flex items-center justify-between  w-[150px]">
        <p className="  text-secondary">Revenues</p>
        <span className="text-[#FFC796]"> 200000</span>
      </div>
    </div>
  );
};

export default ActivitiesCard;

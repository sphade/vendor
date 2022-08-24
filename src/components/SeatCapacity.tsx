import { MinusIcon, PlusIcon } from "../assets/images/icons";

const SeatCapacity = ({
  capacity,
  setCapacity,
}: {
  capacity: number;
    setCapacity: any;
}) => {
  return (
    <div className="bg-gray-200 font-[500] rounded mb-10 flex justify-between items-center border-[#b9b9b9] border px-5 py-3 ">
      <span className="pr-5 capitalize text-base  border-r text-[#828282] border-[#828282]">
        seat capacity
      </span>
      <div className="flex items-center w-[150px] justify-between">
        <MinusIcon 
         
          onClick={() => {
            if (!capacity) return capacity;
            setCapacity(capacity - 1);
          }}
          className={`cursor-pointer ${!capacity && "cursor-not-allowed"}`}
        />

        <span className="text-tertiary  font-semibold    text-xl">
          {capacity}
        </span>
        <PlusIcon
  
          onClick={() => {
            setCapacity(capacity + 1);
          }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SeatCapacity;

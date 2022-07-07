import { Skeleton } from "@mui/material";
const BookingJetCardSkeleton = () => {
  return (
    <div className="w-64 min-h-[376px] border rounded-md  p-4 bg-secondary  ">
      <div className=" rounded-t-md h-[100px] object-cover animate-pulse bg-gray-200 overflow-hidden">
        
      </div>
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <h3 className="text-tertiary    font-semibold capitalize text-base">
            <Skeleton variant="text" width={100} height={40} />
          </h3>
          <Skeleton variant="text" width={50} height={20} />
        </div>
        <div>
          <div className="py-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <Skeleton variant="text" width={50} height={20} />
              <Skeleton variant="text" width={50} height={20} />
            </div>
            <div className="flex justify-between text-tertiary capitalize    font-semibold text-sm">
              <Skeleton variant="text" width={50} height={20} />
              <Skeleton variant="text" width={50} height={20} />
            </div>
          </div>
          <div className=" pb-4 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <Skeleton variant="text" width={50} height={20} />
              <Skeleton variant="text" width={50} height={20} />
            </div>
            <div className="flex justify-between text-tertiary capitalize    font-semibold text-sm">
              <Skeleton variant="text" width={50} height={20} />
              <Skeleton variant="text" width={50} height={20} />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 items-center pt-5"></div>
      </div>
    </div>
  );
};

export default BookingJetCardSkeleton;

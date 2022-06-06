import { Skeleton } from "@mui/material";

const JetCardSkeleton = () => {
  return (
    <div className="w-64 h-[401px] rounded-md shadow p-2">
      {/* <div className=" rounded-t-md mb-3 h-[100px] bg-gray-300 animate-pulse overflow-hidden"></div> */}
      <Skeleton height={100} variant="rectangular" className="mb-5 rounded-t" />
      <div className="divide-y ">
        <div className="flex items-center py-4 justify-between">
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={40} />
        </div>
        <div className="py-4 space-y-2 ">
          <div className="flex justify-between text-xs text-gray-400">
            <Skeleton variant="text" width={60} />
            <Skeleton variant="text" width={60} />
          </div>
          <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
            <Skeleton variant="text" width={60} />
            <Skeleton variant="text" width={60} />
          </div>
        </div>
        <div className="py-4 center-element flex-col space-y-1">
          <Skeleton variant="text" width={60} />
          <Skeleton variant="text" width={40} />
        </div>
        <div className="center-element py-2">
          <Skeleton variant="rectangular" width={70} height={30} className='rounded !bg-orange-50' />
        </div>
      </div>
    </div>
  );
};

export default JetCardSkeleton;

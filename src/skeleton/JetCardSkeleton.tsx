import { Skeleton } from "@mui/material";

const JetCardSkeleton = () => {
  return (
    <div className="w-64 h-[401px] rounded-md shadow p-2">
      {/* <div className=" rounded-t-md mb-3 h-[100px] bg-gray-300 animate-pulse overflow-hidden"></div> */}
      <Skeleton
        animation="wave"
        height={100}
        variant="rectangular"
        className="mb-4 rounded-t"
      />
      <div className="divide-y  ">
        <div className="flex items-center mb-3  justify-between">
          <Skeleton animation="wave" variant="text" width={100} />
          <Skeleton animation="wave" variant="text" width={40} />
        </div>
        <div className="py-2 space-y-2 ">
          <div className="flex justify-between text-xs text-gray-400">
            <Skeleton animation="wave" variant="text" width={60} />
            <Skeleton animation="wave" variant="text" width={60} />
          </div>
          <div className="flex justify-between text-tertiary capitalize font-semibold text-sm">
            <Skeleton animation="wave" variant="text" width={60} />
            <Skeleton animation="wave" variant="text" width={60} />
          </div>
        </div>
        <div className="py-4 center-element flex-col space-y-1">
          <Skeleton animation="wave" variant="text" width={60} />
          <Skeleton animation="wave" variant="text" width={40} />
        </div>
        <div className="center-element pt-5">
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={70}
            height={30}
            className="rounded !bg-orange-50"
          />
        </div>
      </div>
    </div>
  );
};

export default JetCardSkeleton;

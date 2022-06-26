import { Skeleton } from "@mui/material";

const AircraftDetailsSkeleton = () => {
  return (
    <div className="rounded-lg  p-6 w-[522px] mx-auto font-medium border mb-3 border-[#BDBDBD]">
      {/* <Skeleton animation="wave" width="100%" sx={{ height: 190 }} /> */}
<div className='w-full h-[230px] animate-pulse bg-gray-300 rounded '>

</div>
      <div className="divide-y divide-[#BDBDBD] text-sm">
        <div className="py-4 flex items-center justify-between">
          <p className="capitalize text-[#828282]">aircraft Name: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" width={60} />
          </p>
        </div>{" "}
        <div className="py-4 flex items-center justify-between">
          <p className="capitalize text-[#828282]">Service type: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" width={60} />{" "}
          </p>
        </div>{" "}
        <div className="py-4 flex items-center justify-between">
          <p className="capitalize text-[#828282]">aircraft type: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" width={60} />{" "}
          </p>
        </div>{" "}
        <div className="py-4 flex items-center justify-between">
          <p className="capitalize text-[#828282]">seat capacity: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" width={60} />{" "}
          </p>
        </div>{" "}
        <div className="py-4 flex items-center justify-between ">
          <p className="capitalize text-[#828282]">total amount: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" width={60} />{" "}
          </p>
        </div>{" "}
        <div className="py-4 flex flex-col gap-3 ">
          <p className="capitalize text-[#828282]">description: </p>
          <p className="capitalize text-tertiary font-semibold font-hindBold">
            <Skeleton animation="wave" variant="text" />{" "}
            <Skeleton animation="wave" variant="text" />{" "}
            <Skeleton animation="wave" variant="text" />{" "}
            <Skeleton animation="wave" variant="text" width={100} />{" "}
          </p>
        </div>
        <div className="py-4 flex flex-col gap-3 ">
          <p className="capitalize text-[#828282]">photos: </p>
          <div className=" flex gap-2 items-center">
            {[1, 2, 3, 4].map((id: any) => (
              <Skeleton animation="wave" key={id} width={103} height={89} />
            ))}
          </div>
        </div>
        <div className="py-4 flex flex-col gap-3 ">
          <p className="capitalize text-tertiary text-lg font-medium mb-3">
            specifications
          </p>
          <div className="flex justify-between">
            <div>
              <h3 className="capitalize text-tertiary font-medium mb-5">
                performance
              </h3>
              <div className="space-y-2">
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">travel hour: </p>
                  <p className="capitalize text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">max speed: </p>
                  <p className="capitalize text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">max distance: </p>
                  <p className="capitalize text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="capitalize text-tertiary font-medium mb-5">
                interior
              </h3>
              <div className="space-y-2">
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">bar: </p>
                  <p className="capitalize text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">cabin width: </p>
                  <p className=" text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">cabin length: </p>
                  <p className=" text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
                <div className=" flex items-center gap-3 ">
                  <p className="capitalize text-[#828282]">cabin height: </p>
                  <p className=" text-tertiary font-semibold font-hindBold">
                    <Skeleton width={40} animation="wave" variant="text" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <Skeleton animation="wave" variant="text" width={300} height={100} /> */}
        </div>
      </div>
    </div>
  );
};

export default AircraftDetailsSkeleton;

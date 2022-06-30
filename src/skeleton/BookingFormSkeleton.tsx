import { Skeleton } from "@mui/material";

const BookingFormSkeleton = () => {
  return (
    <main className="mb-5">
      <div className="w-[920px] px-20 mx-auto border-[#BDBDBD] border rounded-lg pt-[32px] p-10">
        <div className="w-[760px] h-[323px] animate-pulse bg-gray-300  mb-5 rounded"></div>
        <div>
          <Skeleton
            variant="text"
            width={200}
            height={50}
            className="border-b"
          />
          <div className="mt-10 flex items-center gap-10 ">
            <Skeleton
              variant="text"
              width={"100%"}
              height={100}
              className="border-b"
            />
          </div>
          <div className="flex ">
            <Skeleton
              variant="text"
              width={"100%"}
              height={100}
              className="border-b"
            />
          </div>

          <div className="flex items-center gap-6 ">
            <Skeleton
              variant="text"
              width={"100%"}
              height={100}
              className="border-b"
            />
          </div>
          <div className="w-[218px] mx-auto">
            {/* <Button full>create order</Button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingFormSkeleton;

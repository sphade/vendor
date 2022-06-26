import {
  BackButton,
  Button,
  NotificationProfileHeader,
} from "../../../components";
import aircraftPicture from "../../../assets/images/plane-4.png";
import insidePlane from "../../../assets/images/plane-3.png";
import { EditIcon } from "../../../assets/images/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import localforage from "localforage";
const AircraftDetails = () => {

  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    localforage.getItem("aircraftDetails", (err, val) => {
      

      setDetails(val);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>loading....</h1>;
  }
 
  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">
            {details?.brand} {details?.model}
          </h1>
        </div>
        <div className="flex items-center gap-24">
          <div className="flex items-center">
            <img src={EditIcon} alt="EditIcon" />
            <p className="uppercase text-tertiary font-bold">Edit</p>
          </div>

          <NotificationProfileHeader />
        </div>
      </header>
      <main>
        <div className="rounded-lg  p-6 w-[522px] mx-auto font-medium border mb-3 border-[#BDBDBD]">
          <img
            src={details?.ProductImages[0]?.url}
            alt="aircraftPicture"
            className="h-[230px] w-full object-cover "
          />
          <div className="divide-y divide-[#BDBDBD] text-sm">
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">aircraft Name: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details?.brand} {details?.model}
              </p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">Service type: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details?.serviceType}
              </p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">aircraft type: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details?.airCraftType}
              </p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between">
              <p className="capitalize text-[#828282]">seat capacity: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details.capacity}
              </p>
            </div>{" "}
            <div className="py-4 flex items-center justify-between ">
              <p className="capitalize text-[#828282]">total amount: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details?.price}
              </p>
            </div>{" "}
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-[#828282]">description: </p>
              <p className="capitalize text-tertiary font-semibold font-hindBold">
                {details?.description}
              </p>
            </div>
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-[#828282]">photos: </p>
              <div className=" flex gap-2 items-center">
                {details.ProductImages.map((image: any, id: number) => (
                  <img
                    src={image.url}
                    alt="images"
                    key={id}
                    className="w-[103px] h-[69px] rounded"
                  />
                ))}
              </div>
            </div>
            <div className="py-4 flex flex-col gap-3 ">
              <p className="capitalize text-tertiary text-lg font-medium mb-3">
                specifications{" "}
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
                        {details?.flightHours} hrs
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">max speed: </p>
                      <p className="capitalize text-tertiary font-semibold font-hindBold">
                        {details?.maxSpeed} km/h
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        max distance:{" "}
                      </p>
                      <p className="capitalize text-tertiary font-semibold font-hindBold">
                        {details?.maxRange} square miles
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
                        {details?.isAvailable ? "available" : "Unavailable"}
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">cabin width: </p>
                      <p className=" text-tertiary font-semibold font-hindBold">
                        {details?.cabinWidth} m
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        cabin length:{" "}
                      </p>
                      <p className=" text-tertiary font-semibold font-hindBold">
                        {details?.cabinLength} m
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 ">
                      <p className="capitalize text-[#828282]">
                        cabin height:{" "}
                      </p>
                      <p className=" text-tertiary font-semibold font-hindBold">
                        {details?.cabinHeight} m
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="../edit" className="mt-5">
                <Button full>edit</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AircraftDetails;

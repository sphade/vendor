import {
  BackButton,
  Button,
 
  NotificationProfileHeader,
} from "../../../components";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import localforage from "localforage";
import AircraftDetailsSkeleton from "../../../skeleton/AircraftDetailsSkeleton";
import { Skeleton } from "@mui/material";
import { Gallery, Item } from "react-photoswipe-gallery";
import { formatNumberToCurrency } from "../../../hooks/useFormatNumberToCurrency";
const AircraftDetails = () => {
  const [details, setDetails] = useState<any>();

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    localforage.getItem("selectedAircraftDetails", (err, val) => {
      setDetails(val);
    
      setLoading(false);
     
    });
  }, []);

  return (
    <div>
      {/* <AircraftDetailsSkeleton/> */}
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">
            {loading ? (
              <Skeleton variant={"text"} animation="wave" width="200px" />
            ) : (
              `${details.brand}  ${details.model}`
            )}
          </h1>
        </div>
        <div className="flex items-center gap-24">
<NotificationProfileHeader />
        </div>
      </header>
      <main>
        {loading ? (
          <AircraftDetailsSkeleton />
        ) : (
          <div className="rounded-lg  p-6 w-[522px] mx-auto font-medium border mb-3 border-[#BDBDBD]">
            <img
              src={details?.ProductImages[0]?.url}
              alt="aircraftPicture"
              className="h-[230px] w-full object-cover bg-gray-200"
            />

            <div className="divide-y divide-[#BDBDBD] text-sm">
              <div className="py-4 flex items-center justify-between">
                <p className="capitalize text-[#828282]">aircraft Name: </p>
                <p className="capitalize text-tertiary font-semibold   ">
                  {details?.brand} {details?.model}
                </p>
              </div>{" "}
              <div className="py-4 flex items-center justify-between">
                <p className="capitalize text-[#828282]">Service type: </p>
                <p className="capitalize text-tertiary font-semibold   ">
                  {details?.serviceType}
                </p>
              </div>{" "}
              <div className="py-4 flex items-center justify-between">
                <p className="capitalize text-[#828282]">aircraft type: </p>
                <p className="capitalize text-tertiary font-semibold   ">
                  {details?.airCraftType}
                </p>
              </div>{" "}
              <div className="py-4 flex items-center justify-between">
                <p className="capitalize text-[#828282]">seat capacity: </p>
                <p className="capitalize text-tertiary font-semibold   ">
                  {details.capacity}
                </p>
              </div>{" "}
              <div className="py-4 flex items-center justify-between ">
                <p className="capitalize text-[#828282]">total amount: </p>
                  <p className="capitalize text-tertiary font-semibold   ">
                  {formatNumberToCurrency({ number:details?.price  })}
                  
                </p>
              </div>{" "}
              <div className="py-4 flex flex-col gap-3 ">
                <p className="capitalize text-[#828282]">description: </p>
                <p className="capitalize text-tertiary font-semibold   ">
                  {details?.description}
                </p>
              </div>
              <div className="py-4 flex flex-col gap-3 ">
                <p className="capitalize text-[#828282]">photos: </p>
                <div className=" flex gap-2 items-center">
                  <Gallery>
                    {details.ProductImages.map((image: any, id: number) => (
                      <Item
                        original={image.url}
                        thumbnail={image.url}
                        width="1024"
                        height="608"
                        key={id}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref as React.RefObject<HTMLImageElement>}
                            onClick={open}
                            className="w-[103px] h-[69px] cursor-pointer rounded bg-gray-200"
                            src={image.url}
                            alt=''
                          />
                        )}
                      </Item>
                    ))}
                  </Gallery>
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
                        <p className="capitalize text-[#828282]">
                          travel hour:{" "}
                        </p>
                        <p className="capitalize text-tertiary font-semibold   ">
                          {details?.flightHours} hrs
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">max speed: </p>
                        <p className="capitalize text-tertiary font-semibold   ">
                          {details?.maxSpeed} km/h
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">
                          max distance:{" "}
                        </p>
                        <p className="capitalize text-tertiary font-semibold   ">
                          {details?.maxRange} square miles
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">
                          max altitude:{" "}
                        </p>
                        <p className="capitalize text-tertiary font-semibold   ">
                          {details?.maxAltitude} ft
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
                        <p className="capitalize text-tertiary font-semibold   ">
                          {details?.bar ? "available" : "Unavailable"}
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">
                          cabin width:{" "}
                        </p>
                        <p className=" text-tertiary font-semibold   ">
                          {details?.cabinWidth} m
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">
                          cabin length:{" "}
                        </p>
                        <p className=" text-tertiary font-semibold   ">
                          {details?.cabinLength} m
                        </p>
                      </div>
                      <div className=" flex items-center gap-3 ">
                        <p className="capitalize text-[#828282]">
                          cabin height:{" "}
                        </p>
                        <p className=" text-tertiary font-semibold   ">
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
        )}
      </main>
    </div>
  );
};

export default AircraftDetails;

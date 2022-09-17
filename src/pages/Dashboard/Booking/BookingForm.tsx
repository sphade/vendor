import {
  BackButton,
  Button,
  DateAndTimePicker,
  Loading,
  LocationDropDown,
  NotificationProfileHeader,
  SelectInput,
} from "../../../components";
import * as React from "react";
import {
  CompassIcon,
  LocationIcon,
  MinusIcon,
  PlusIcon,
  ToAndFroIcon,
} from "../../../assets/images/icons";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import localforage from "localforage";

const BookingForm = () => {
  const [details, setDetails] = useState<any>();
  const [destination, setDestination] = useState<any>();
  const [departure, setDeparture] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [passengers, setPassengers] = useState<number>(1);

  useEffect(() => {
    localforage.getItem("selectedAircraftDetails", (_err, val) => {
      setDetails(val);
      setLoading(false);
    });
  }, []);

  const { control, watch } = useForm({
    defaultValues: {
      serviceType: "charter",
      tripType: "roundtrip",
    },
  });

  if (loading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">booking form</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main className="mb-5">
        <div className="w-[850px] px-20 mx-auto border-[#BDBDBD] border rounded-lg pt-[32px] p-10">
          <img
            src={details?.ProductImages[0].url}
            alt={""}
            className="w-[760px] h-[323px] object-cover rounded "
          />

          <div>
            <h1 className="font-semibold    capitalize text-tertiary text-2xl p-4 border-b border-[#BDBDBD]  ">
              {`${details.brand}  ${details.model}`}
            </h1>
            <div className="mt-10 flex   mb-10 justify-between items-center">
              <div className="flex gap-10 items-center">
                <div className="w-[158px] space-y-3">
                  <p className="font-semibold    text-gray-700">Service type</p>
                  {/* <SelectInput className="!-py-12" size="small" /> */}
                  <SelectInput
                    control={control}
                    className="la"
                    options={[
                      {
                        value: "charter",
                        name: "Charter",
                      },
                      { value: "jetPooling", name: "jet pooling" },
                    ]}
                    rules={{
                      required: "this field is required",
                    }}
                    name="serviceType"
                    size="small"
                  />
                </div>

                <div className="w-[158px] space-y-3">
                  {watch("serviceType") === "jetPooling" ? null : (
                    <>
                      <p className="font-semibold    text-gray-700">
                        Trip type
                      </p>
                      <SelectInput
                        control={control}
                        className=""
                        // label="Trip Type"
                        options={[
                          {
                            value: "roundtrip",
                            name: "RoundTrip",
                          },
                        ]}
                        rules={{
                          required: "this field is required",
                        }}
                        name="tripType"
                        size="small"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-5">
                <MinusIcon
                  onClick={() => {
                    if (passengers <= 1) return passengers;
                    setPassengers(passengers - 1);
                  }}
                  className={`cursor-pointer ${
                    passengers <= 1 && "cursor-not-allowed"
                  }`}
                />

                <span className="text-primary  font-semibold     ">
                  {passengers} passengers
                </span>
                <PlusIcon
                  onClick={() => {
                    setPassengers(passengers + 1);
                  }}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex mb-8">
              <LocationDropDown
                value={departure}
                setValue={setDeparture}
                placeHolder={"Departure"}
                Icon={CompassIcon}
              />
              <ToAndFroIcon className="-mx-1  z-50 mt-2 w-20" />
              <LocationDropDown
                value={destination}
                setValue={setDestination}
                placeHolder={"destination"}
                Icon={LocationIcon}
              />
            </div>

            <div className="flex items-center gap-6 mb-14">
              <DateAndTimePicker date={new Date()} />
              <DateAndTimePicker date={new Date()} />
            </div>
            <div className="w-[218px] mx-auto">
              <Button full>schedule flight</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;

import {
  BackButton,
  Button,
  InteriorInput,
  Loading,
  NotificationProfileHeader,
  PerformanceInput,
  SeatCapacity,
  SelectInput,
  SwitchCustomized,
} from "../../../components";
import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import localforage from "localforage";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import { useEditAircraft } from "../../../hooks/mutations";
const AircraftEdit = () => {
  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [capacity, setCapacity] = useState<any>(0);

  // const [capacity, setCapacity] = useState<any>(0);
  const [bar, setBar] = useState<boolean>(true);
  
  useEffect(() => {
    localforage.getItem("selectedAircraftDetails", (err, val: any) => {
      setDetails(val);
     
      setLoading(false);
      setCapacity(val?.capacity);
      setBar(val?.bar);
      
    });
  }, []);
  const editAircraft = useEditAircraft();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: useMemo(() => {
      return details
    }, [details]) 
      
      
    
  });
  useEffect(() => {
    reset(details);
  }, [details, reset]);
  const onSubmit = (data: any) => {
    const nameSplit: any = data?.aircraftName.split(/[, ]+/);
    delete data?.aircraftName;
    delete data?.id;
    delete data?.tag;
    delete data?.isArchived;
    delete data?.status;
    delete data?.maintenanceFrom;
    delete data?.maintenanceTo;
    delete data?.createdAt;
    delete data?.updatedAt;
    delete data?.VendorId;
    delete data?.AirportId;
    delete data?.ProductImages;
    console.log({...data,
      brand: nameSplit[0],
      model: nameSplit[1],
    })
    editAircraft.mutate({
      id:details?.id,
     data: {...data,
      brand: nameSplit[0],
      model: nameSplit[1],
       capacity,
    bar
     }
    });
  };
  if (loading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="">
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">
            {`${details.brand}  ${details.model}`}
          </h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg  p-6 w-[522px] mx-auto font-semibold    border mb-3 border-[#BDBDBD]"
        >
          <div>
            <p className="capitalize text-tertiary ">photos</p>
            <Slider {...settings}>
              {details?.ProductImages.map((image: any) => (
                <img
                  src={image?.url}
                  alt={""}
                  className="h-[230px] w-full object-cover rounded"
                  key={image?.publicId}
                />
              ))}
            </Slider>
          </div>

          <div className=" text-sm mt-10">
            <TextField
              label="Aircraft Name"
              className="!mb-5"
              fullWidth
              defaultValue={`${details?.brand} ${details?.model}`}
              {...register("aircraftName")}
            />
            <div className="flex gap-5 mb-5">
              <SelectInput
                control={control}
                defaultValue={details?.airCraftType}
                label="Aircraft Type"
                options={[
                  {
                    value: "private jet",
                    name: "Private jet",
                  },
                  { value: "helicopter", name: "Helicopter" },
                ]}
               
                name="airCraftType"
                size="medium"
              />

              <SelectInput
                defaultValue={details?.serviceType}
                control={control}
                label="Service Type"
                options={[
                  {
                    value: "charter",
                    name: "Charter",
                  },
                  { value: "jet pooling", name: "jet pooling" },
                ]}
               
                name="serviceType"
                size="medium"
              />
            </div>
          </div>
          <div className="mb-10">
            <SeatCapacity capacity={capacity} setCapacity={setCapacity} />
            <PerformanceInput
              label="Baggage Capacity"
              name="baggageCapacity"
              placeholder="kg"
              register={register}
              rule={{
                required: "this field is required",
              }}
              errors={errors.baggageCapacity}
              defaultValue={details?.baggageCapacity}
            />
          </div>
          <div className="my-10 ">
            <p className="capitalize text-tertiary mb-3">travel fee</p>
            <div className="flex  gap-5 relative">
              <div className="flex-1 flex gap-5">
                <div className="bg-gray-200  px-6 flex items-center  h-full rounded-lg">
                  NGN
                </div>
                <input
                  defaultValue={details?.price}
                  className={` border w-full focus:ring-blue-500 h-10 px-3 rounded-lg border-[#828282] ${
                    errors.travelFee && " border-red-700 focus:!border-red-700"
                  }`}
                  {...register("price", {
                    required: "this field is required",
                  })}
                />
                {errors.travelFee && (
                  <p className=" absolute -bottom-3.5 text-xs text-red-700">
                    {errors.travelFee.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-5 pb-5 border-b border-[#BDBDBD]">
            <p className="capitalize text-tertiary mb-3 font-semibold   ">
              description
            </p>

            <TextField
              fullWidth
              rows={4}
              defaultValue={details?.description}
              multiline
              {...register("description", {
                required: "this field is required",
                maxLength: {
                  value: 250,
                  message: "no more than 250 characters",
                },
              })}
              error={errors.description}
              helperText={errors.description && errors.description.message}
            />
          </div>
          <div className="space-y-5  mb-10  border-[#BDBDBD]">
            <p className="capitalize text-tertiary font-semibold    ">
              specification
            </p>
            <div>
              <p className="capitalize text-tertiary font-semibold    text-sm mb-7">
                performance
              </p>
              <div className="grid grid-cols-2 gap-10   justify-between">
                <PerformanceInput
                  defaultValue={details?.flightHours}
                  label="travel hours"
                  name="flightHours"
                  placeholder="Hours"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.travelHours}
                />
                <PerformanceInput
                  defaultValue={details?.maxSpeed}
                  label="max speed"
                  name="maxSpeed"
                  placeholder="km/h"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.maxSpeed}
                />
                <PerformanceInput
                  defaultValue={details?.maxRange}
                  label="max distance"
                  name="maxRange"
                  placeholder="km"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.maxRange}
                />
                <PerformanceInput
                  defaultValue={details?.maxAltitude}
                  label="max altitude"
                  name="maxAltitude"
                  placeholder="ft"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.maxAltitude}
                />
              </div>
            </div>
            <div>
              <p className="capitalize text-tertiary font-semibold    text-sm mt-3 mb-7">
                interior
              </p>
              <div className="flex flex-col gap-5 items-center">
                <InteriorInput
                  defaultValue={details?.cabinWidth}
                  name="cabinWidth"
                  placeholder="Cabin Width"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.cabinWidth}
                />
                <InteriorInput
                  defaultValue={details?.cabinLength}
                  name="cabinLength"
                  placeholder="Cabin Length"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.cabinLength}
                />
                <InteriorInput
                  defaultValue={details?.cabinHeight}
                  name="cabinHeight"
                  placeholder="Cabin Height"
                  register={register}
                  rule={{
                    required: "this field is required",
                  }}
                  errors={errors.cabinHeight}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-5  border-[#BDBDBD]">
            <p className="text-xl text-gray-500 capitalize">wine bar</p>
            <div className="flex flex-col justify-center items-center">
              <SwitchCustomized checked={bar} setChecked={setBar} />
              {bar ? (
                <p className="capitalize -ml-5">available</p>
              ) : (
                <p className="capitalize -ml-5 text-gray-500">Unavailable</p>
              )}
            </div>
          </div>
          <Button full loading={editAircraft.isLoading}>
            save
          </Button>
        </form>
      </main>
    </div>
  );
};

export default AircraftEdit;

import { TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import {
  AddAircraftIcon,
  AddAircraftSmallIcon,
  ArrowRight,
  EditImageIcon,
} from "../../../assets/images/icons";
import ImageUploading from "react-images-uploading";

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
import {
  useDeleteAircraftImages,
  useEditAircraft,
  useEditAircraftImages,
} from "../../../hooks/mutations";
import { useAirCraftDetails } from "../../../hooks/queries";
import { useParams } from "react-router-dom";
const AircraftEdit = () => {
  const { id } = useParams();
  const { data: details, isLoading } = useAirCraftDetails({ id });
  const [capacity, setCapacity] = useState<any>(0);
  const [showAddPic, setShowAddPic] = useState<boolean>(false);

  const [bar, setBar] = useState<boolean>(true);

  useEffect(() => {
    setCapacity(details?.capacity);
    setBar(details?.bar);
  }, [details]);
  const editAircraft = useEditAircraft();
  const editAircraftImage = useEditAircraftImages();
  const deleteAircarftImage = useDeleteAircraftImages();
  const [images, setImages] = useState<any[]>([]);
  const onImageChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowRight />,
  };
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: useMemo(() => {
      return details;
    }, [details]),
  });
  useEffect(() => {
    reset(details);
  }, [details, reset]);
  useEffect(() => {
    editAircraftImage.isSuccess && setImages([]);
  }, [editAircraftImage.isSuccess]);
  const onSubmit = (data: any) => {
    const lastIndex = data?.aircraftName.lastIndexOf(" ");

    const brand = data?.aircraftName.slice(0, lastIndex);
    const model = data?.aircraftName.slice(lastIndex + 1);
    delete data?.aircraftName;
    delete data?.id;
    delete data?.tag;
    delete data?.pickupTerminal;
    delete data?.destinations;
    delete data?.maintenanceFrom;
    delete data?.maintenanceTo;
    delete data?.createdAt;
    delete data?.updatedAt;
    delete data?.VendorId;
    delete data?.AirportId;
    delete data?.ProductImages;
    delete data?.isArchived;
    delete data?.status;

    editAircraft.mutate({
      id: details?.id,
      data: {
        ...data,
        brand,
        model,
        capacity,
        bar,
      },
    });
  };
  const maxNumber = 4;

  if (isLoading) {
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
        {!showAddPic ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg  p-6 w-[522px] mx-auto font-semibold    border mb-3 border-[#BDBDBD]"
          >
            <div className="relative">
              <p className="capitalize text-tertiary ">photos</p>
              <EditImageIcon
                onClick={() => setShowAddPic(true)}
                className="absolute top-[50px] right-[10px] cursor-pointer z-10"
              />
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
                    { value: "any", name: "Any" },
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
                  <div className="bg-gray-200  px-6 flex items-center  h-fit py-2.5 rounded-lg">
                    NGN
                  </div>

                  <TextField
                    fullWidth
                    {...register("price", {
                      required: "this field is required",
                    })}
                    size="small"
                    error={errors.price}
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    defaultValue={details.price}
                    helperText={errors.price && errors.price.message}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5  border-b border-[#BDBDBD]">
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
            <div className="space-y-5 mb-10">
              <TextField
                fullWidth
                {...register("year", {
                  required: "this field is required",
                })}
                label="year"
                error={errors.year}
                type="number"
                InputProps={{ inputProps: { min: 1 } }}
                helperText={errors.year && errors.year.message}
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
        ) : (
          <ImageUploading
            maxNumber={1}
            dataURLKey="image"
            value={images}
            onChange={onImageChange}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="w-[522px] mb-5 border-[#BDBDBD] px-12 border rounded-lg mx-auto ">
                <div className="flex items-center justify-between py-5">
                  <p className="text-tertiary font-bold">
                    Drag and drop to change photo order.
                  </p>
                  <p className="font-semibold    text-gray-500">
                    {details?.ProductImages.length}/
                    <span className="font-bold text-tertiary ">
                      {maxNumber}
                    </span>{" "}
                    photos
                  </p>
                </div>

                {details?.ProductImages.length ? (
                  <img
                    src={details?.ProductImages[0]?.url}
                    alt="aircraftPicture"
                    className="w-full mb-6 rounded-lg h-[205px] object-fit "
                  />
                ) : (
                  <div className="w-full mb-6  h-[205px]   ">
                    <AddAircraftIcon className="w-full mb-6 scale-y-[1.3] h-full  " />
                  </div>
                )}
                <div className="flex gap-2 mb-[164px] flex-wrap">
                  {details?.ProductImages.map((image: any, index: any) => {
                    return (
                      <div key={index}>
                        <img
                          src={image.url}
                          alt=""
                          className="w-[133px] rounded-lg h-[90px] object-fit"
                        />
                        <div className="flex flex-col gap-1 mt-1">
                          {/* <button
                             onClick={() => onImageUpdate(index)}
                            className="rounded text-xs bg-blue-500 p-1 text-white"
                          >
                            Update
                          </button> */}
                          <button
                            onClick={() => {
                              const data: any = { publicId: image?.publicId };
                              deleteAircarftImage.mutate({
                                id: details?.id,
                                data: data,
                              });
                            }}
                            className="rounded text-xs bg-red-500 p-1 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {imageList.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.image}
                        alt=""
                        className="w-[133px] rounded-lg h-[90px] object-fit"
                      />
                      <div className="flex flex-col gap-1 mt-1">
                        <button
                          onClick={() => {
                            const formData = new FormData();
                            formData.append("image", images[0]?.file);
                            editAircraftImage.mutate({
                              id: details?.id,
                              data: formData,
                            });
                          }}
                          className="rounded text-xs bg-blue-500 p-1 text-white"
                        >
                          {editAircraftImage.isLoading
                            ? "Uploading.."
                            : "Upload"}
                        </button>
                        <button
                          onClick={() => onImageRemove(index)}
                          className="rounded text-xs bg-red-500 p-1 text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  {images.length < 1 && details?.ProductImages.length < 4 && (
                    <AddAircraftSmallIcon
                      onClick={onImageUpload}
                      {...dragProps}
                      className={`w-[133px] cursor-pointer rounded-lg h-[90px] object-fit   ${
                        isDragging && " !cursor-grabbing"
                      } `}
                    />
                  )}
                </div>
                <div className="mb-[32px]">
                  <Button
                    full
                    onClick={() => {
                      setShowAddPic(false);
                    }}
                  >
                    save
                  </Button>
                </div>
              </div>
            )}
          </ImageUploading>
        )}
      </main>
    </div>
  );
};

export default AircraftEdit;

import {
  BackButton,
  Button,
  InteriorInput,
  NotificationProfileHeader,
  PerformanceInput,
  SeatCapacity,
  SwitchCustomized,
} from "../../../components";
import {
  AddAircraftIcon,
  AddAircraftSmallIcon,
} from "../../../assets/images/icons";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";

import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import SelectInput from "../../../components/SelectInput";
import { useCreateAircraft } from "../../../hooks/mutations";
import { useAirport } from "../../../hooks/queries";
const AircraftAdd = () => {
  const airports = useAirport();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const createAircraft = useCreateAircraft();
  const [showAddPic, setShowAddPic] = useState<boolean>(false);
  const [capacity, setCapacity] = useState<any>(0);

  const [bar, setBar] = useState<any>(true);
  const [images, setImages] = useState<any[]>([]);

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: any) => {
    if (!images.length) {
      enqueueSnackbar(" please select a photo", {
        variant: "error",
      });
      return;
    }
    if (capacity === 0) {
      enqueueSnackbar("seat capacity cannot be zero", {
        variant: "error",
      });
      return;
    }
    const lastIndex = data?.aircraftName.lastIndexOf(" ");

    const brand = data?.aircraftName.slice(0, lastIndex);
    const model = data?.aircraftName.slice(lastIndex + 1);
    delete data?.aircraftName;

    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    formData.append("capacity", capacity);
    formData.append("bar", bar);
    formData.append("model", model);
    formData.append("brand", brand);
    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]?.file);
    }

    createAircraft.mutate(formData);
  };
  const maxNumber = 4;

  const onImageChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };

  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">Add Aircraft</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main>
        <ImageUploading
          multiple
          value={images}
          onChange={onImageChange}
          maxNumber={maxNumber}
          dataURLKey="image"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) =>
            !showAddPic ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg  p-6 w-[522px] mx-auto font-semibold    border mb-3 border-[#BDBDBD]"
              >
                <div>
                  <p className="capitalize text-tertiary ">photos</p>
                  {imageList.length ? (
                    <img
                      src={imageList[0]?.image}
                      alt="aircraftPicture"
                      onClick={() => {
                        setShowAddPic(true);
                      }}
                      className="h-[230px] rounded-lg w-full cursor-pointer object-cover "
                    />
                  ) : (
                    <AddAircraftIcon
                      onClick={() => {
                        onImageUpload();
                        setShowAddPic(true);
                      }}
                      className="h-[230px] w-full cursor-pointer scale-y-[1.3] object-contain"
                    />
                  )}
                </div>

                <div className=" text-sm mt-10">
                  <TextField
                    label="Aircraft Name"
                    className="!mb-5"
                    fullWidth
                    {...register("aircraftName", {
                      required: "this field is required",
                    })}
                    error={errors.aircraftName}
                    helperText={
                      errors.aircraftName && errors.aircraftName.message
                    }
                  />
                  <div className="flex gap-5 mb-5">
                    <SelectInput
                      control={control}
                      className=""
                      label="Aircraft Type"
                      options={[
                        {
                          value: "private jet",
                          name: "Private jet",
                        },
                        { value: "helicopter", name: "Helicopter" },
                      ]}
                      rules={{
                        required: "this field is required",
                      }}
                      name="airCraftType"
                      size="medium"
                    />

                    <SelectInput
                      control={control}
                      className="la"
                      label="Service Type"
                      options={[
                        {
                          value: "charter",
                          name: "Charter",
                        },
                        { value: "jet pooling", name: "jet pooling" },
                        { value: "any", name: "Any" },
                      ]}
                      rules={{
                        required: "this field is required",
                      }}
                      name="serviceType"
                      size="medium"
                    />
                  </div>
                  <SeatCapacity capacity={capacity} setCapacity={setCapacity} />
                  <PerformanceInput
                    defaultValue={""}
                    label="Baggage Capacity"
                    name="baggageCapacity"
                    placeholder="kg"
                    register={register}
                    rule={{
                      required: "this field is required",
                    }}
                    errors={errors.baggageCapacity}
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
                        helperText={errors.price && errors.price.message}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5   border-[#BDBDBD]">
                  <p className="capitalize text-tertiary mb-3 font-semibold   ">
                    description
                  </p>
                  <TextField
                    fullWidth
                    rows={4}
                    multiline
                    placeholder="Not more than 250 characters"
                    {...register("description", {
                      required: "this field is required",
                      maxLength: {
                        value: 250,
                        message: "no more than 250 characters",
                      },
                    })}
                    error={errors.description}
                    helperText={
                      errors.description && errors.description.message
                    }
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
                  <SelectInput
                    control={control}
                    label="choose airport"
                    options={airports?.data?.map((airport: any) => ({
                      value: airport?.id,
                      name: `${airport?.name} `,
                    }))}
                    rules={{
                      required: "this field is required",
                    }}
                    name="baseAirport"
                    size="medium"
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
                        defaultValue={""}
                        label="travel hours"
                        name="flightHours"
                        placeholder="Hours"
                        register={register}
                        rule={{
                          required: "this field is required",
                        }}
                        errors={errors.flightHours}
                      />
                      <PerformanceInput
                        defaultValue={""}
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
                        defaultValue={""}
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
                        defaultValue={""}
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
                        defaultValue={""}
                        name="cabinWidth"
                        placeholder="Cabin Width"
                        register={register}
                        rule={{
                          required: "this field is required",
                        }}
                        errors={errors.cabinWidth}
                      />
                      <InteriorInput
                        defaultValue={""}
                        name="cabinLength"
                        placeholder="Cabin Length"
                        register={register}
                        rule={{
                          required: "this field is required",
                        }}
                        errors={errors.cabinLength}
                      />
                      <InteriorInput
                        defaultValue={""}
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
                      <p className="capitalize -ml-5 text-gray-500">
                        Unavailable
                      </p>
                    )}
                  </div>
                </div>
                <Button full loading={createAircraft.isLoading}>
                  add
                </Button>
              </form>
            ) : (
              <div className="w-[522px] mb-5 border-[#BDBDBD] px-12 border rounded-lg mx-auto ">
                <div className="flex items-center justify-between py-5">
                  <p className="text-tertiary font-bold">
                    Drag and drop to change photo order.
                  </p>
                  <p className="font-semibold    text-gray-500">
                    {imageList.length}/
                    <span className="font-bold text-tertiary ">
                      {maxNumber}
                    </span>{" "}
                    photos
                  </p>
                </div>

                {imageList.length ? (
                  <img
                    src={imageList[0]?.image}
                    alt="aircraftPicture"
                    className="w-full mb-6 rounded-lg h-[205px] object-fit "
                  />
                ) : (
                  <div className="w-full mb-6  h-[205px]   ">
                    <AddAircraftIcon className="w-full mb-6 scale-y-[1.3] h-full  " />
                  </div>
                )}
                <div className="flex gap-2 mb-[164px] flex-wrap">
                  {imageList.map((image, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={image["image"]}
                          alt=""
                          className="w-[133px] rounded-lg h-[90px] object-fit"
                        />
                        <div className="flex flex-col gap-1 mt-1">
                          <button
                            onClick={() => onImageUpdate(index)}
                            className="rounded text-xs bg-blue-500 p-1 text-white"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => onImageRemove(index)}
                            className="rounded text-xs bg-red-500 p-1 text-white"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {imageList.length < 4 && (
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
            )
          }
        </ImageUploading>
      </main>
    </div>
  );
};

export default AircraftAdd;

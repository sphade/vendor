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
const AircraftAdd = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const createAircraft = useCreateAircraft();
  const [showAddPic, setShowAddPic] = useState<boolean>(false);
  const [capacity, setCapacity] = useState<number>(0);
  const [model] = useState<string>("3000");
  const [bar, setBar] = useState<boolean>(true);
  const [images, setImages] = useState<any[]>([]);
  const [year] = useState<any>("2000");
  const [baseAirport] = useState<any>("1a0dda58-dc1e5f830c1e1aac");
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: {}) => {
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
    createAircraft.mutate({
      ...data,
      capacity,
      bar,
      model,
      year,
      baseAirport,

      image: images[0]?.file,
    });
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
                      className="h-[230px] w-full cursor-pointer scale-y-[1.3]"
                    />
                  )}
                </div>

                <div className=" text-sm mt-10">
                  <TextField
                    label="Aircraft Name"
                    className="!mb-5"
                    fullWidth
                    {...register("brand", {
                      required: "this field is required",
                    })}
                    error={errors.brand}
                    helperText={errors.brand && errors.brand.message}
                  />
                  <div className="flex gap-5 mb-5">
                    <SelectInput
                      control={control}
                      className=""
                      label="Aircraft Type"
                      options={[
                        {
                          value: "private Jet",
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
                        { value: "jetPooling", name: "Jet pooling" },
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
                        type='number'
                        InputProps={{ inputProps: { min: 1 } }}

                        helperText={errors.price && errors.price.message}
                      />
                      {/* {errors.price && (
                        <p className=" absolute -bottom-3.5 text-xs text-red-700">
                          {errors.price.message}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
                <div className="mb-5 pb-5  border-[#BDBDBD]">
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

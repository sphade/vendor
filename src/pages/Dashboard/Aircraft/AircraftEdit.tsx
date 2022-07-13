import {
  BackButton,
  Button,
  Loading,
  NotificationProfileHeader,
  SeatCapacity,
  SelectInput,
  SwitchCustomized,
} from "../../../components";
import aircraftPicture from "../../../assets/images/plane-4.png";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import localforage from "localforage";
import { useForm } from "react-hook-form";

const AircraftEdit = () => {
  const [details, setDetails] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    localforage.getItem("aircraftDetails", (err, val) => {
      setDetails(val);
      setError(err);
      setLoading(false);
      console.log(err);
    });
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
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
        <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">edit sky Night 9000</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main>
        <div className="rounded-lg  p-6 w-[522px] mx-auto font-semibold    border mb-3 border-[#BDBDBD]">
          <div>
            <p className="capitalize text-tertiary ">photos</p>
            <img
              src={details?.ProductImages[0]?.url}
              alt="icon"
              className="h-[230px] w-full object-cover "
            />
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
                    value: "privateJet",
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
                defaultValue={details?.serviceType}
                control={control}
                label="Service Type"
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
                size="medium"
              />
            </div>
          </div>
          <div className="mb-10">
            <p className="capitalize text-tertiary mb-3">travel fee</p>
            <div className="flex items-center gap-5">
              {/* <SelectInput
                className="!w-[100px] !bg-gray-200 !outline-none !border-0"
                size="small"
              /> */}
              <input className="flex-1 border h-10 px-3 rounded-lg border-[#828282]" />
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
          {/* <div className="space-y-5 pb-10 mb-10 border-b border-[#BDBDBD]">
            <p className="capitalize text-tertiary font-semibold    ">
              specification
            </p>
            <div>
              <p className="capitalize text-tertiary font-semibold    text-sm mb-3">
                performance
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <TextField
                  className="!w-[225]"
                  InputProps={{
                    startAdornment: (
                      <SelectInput
                        size="small"
                        className="!w-24 !border-0 !outline-none"
                      />
                    ),
                  }}
                />

                <TextField
                  className="!w-[225]"
                  InputProps={{
                    startAdornment: (
                      <SelectInput
                        size="small"
                        className="!w-24 !border-0 !outline-none"
                      />
                    ),
                  }}
                />
              </div>
            </div>
            <div>
              <p className="capitalize text-tertiary font-semibold    text-sm mb-3">
                interior
              </p>
              <div className="flex flex-wrap gap-5 items-center">
                <div className="flex items-center gap-5 w-full">
                  <SelectInput
                    className="!w-[100px] !bg-gray-200 !outline-none !border-0"
                    size="small"
                  />
                  <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                </div>
                <div className="flex items-center gap-5 w-full">
                  <SelectInput
                    className="!w-[100px] !bg-gray-200 !outline-none !border-0"
                    size="small"
                  />
                  <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                </div>
                <div className="flex items-center gap-5 w-full">
                  <SelectInput
                    className="!w-[100px] !bg-gray-200 !outline-none !border-0"
                    size="small"
                  />
                  <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex justify-between mb-5 pb-5 border-b border-[#BDBDBD]">
            <p className="text-xl text-gray-500 capitalize">wine bar</p>
            <div className="flex flex-col justify-center items-center">
              {/* <SwitchCustomized /> */}
              <p className="capitalize -ml-5">available</p>
            </div>
          </div>
          <Button full>save</Button>
        </div>
      </main>
    </div>
  );
};

export default AircraftEdit;

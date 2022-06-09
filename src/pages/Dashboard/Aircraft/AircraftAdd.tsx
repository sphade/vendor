import {
  BackButton,
  Button,
  NotificationProfileHeader,
  SelectInput,
  SwitchCustomized,
} from "../../../components";
import {
  AddAircraftIcon,
  AddAircraftSmallIcon,
  MinusIcon,
  PlusIcon,
} from "../../../assets/images/icons";
import { TextField } from "@mui/material";
import planeAdd from "../../../assets/images/plane6.png";
import { useState } from "react";
const AircraftAdd = () => {
  const [showAddPic, setShowAddPic] = useState<boolean>(false);
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
        <div>
          {!showAddPic ? (
            <div className="rounded-lg  p-6 w-[522px] mx-auto font-semibold border mb-3 border-[#BDBDBD]">
              <div>
                <p className="capitalize text-tertiary ">photos</p>
                <img
                  src={AddAircraftIcon}
                  alt="aircraftPicture"
                  className="h-[230px] w-full object-contain "
                />
              </div>

              <div className=" text-sm mt-10">
                <TextField
                  value="sky night 3000"
                  label="Aircraft Name"
                  className="!mb-5"
                  fullWidth
                />
                <div className="flex gap-5 mb-5">
                  <SelectInput />
                  <SelectInput />
                </div>
                <div className="bg-gray-100 rounded mb-10 flex justify-between items-center border-[#b9b9b9] border px-5 py-3 ">
                  <span className="pr-5 capitalize text-base  border-r text-[#828282] border-[#828282]">
                    seat capacity
                  </span>
                  <div className="flex items-center w-[150px] justify-between">
                    <img src={MinusIcon} alt="MinusIcon" />
                    <span className="text-tertiary font-semibold text-xl">
                      20
                    </span>
                    <img src={PlusIcon} alt="PlusIcon" />
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <p className="capitalize text-tertiary mb-3">travel fee</p>
                <div className="flex items-center gap-5">
                  <SelectInput
                    className="!w-[100px] !bg-gray-100 !outline-none !border-0"
                    size="small"
                  />
                  <input className="flex-1 border h-10 px-3 rounded-lg border-[#828282]" />
                </div>
              </div>
              <div className="mb-5 pb-5  border-[#BDBDBD]">
                <p className="capitalize text-tertiary mb-3 font-semibold">
                  description
                </p>
                <TextField
                  fullWidth
                  rows={4}
                  multiline
                  placeholder="Not more than 250 characters"
                />
              </div>
              <div className="space-y-5 pb-10 mb-10 border-b border-[#BDBDBD]">
                <p className="capitalize text-tertiary font-semibold ">
                  specification
                </p>
                <div>
                  <p className="capitalize text-tertiary font-semibold text-sm mb-3">
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
                  <p className="capitalize text-tertiary font-semibold text-sm mb-3">
                    interior
                  </p>
                  <div className="flex flex-wrap gap-5 items-center">
                    <div className="flex items-center gap-5 w-full">
                      <SelectInput
                        className="!w-[100px] !bg-gray-100 !outline-none !border-0"
                        size="small"
                      />
                      <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                    </div>
                    <div className="flex items-center gap-5 w-full">
                      <SelectInput
                        className="!w-[100px] !bg-gray-100 !outline-none !border-0"
                        size="small"
                      />
                      <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                    </div>
                    <div className="flex items-center gap-5 w-full">
                      <SelectInput
                        className="!w-[100px] !bg-gray-100 !outline-none !border-0"
                        size="small"
                      />
                      <input className="flex-1 border h-10 px-3 w-full rounded-lg border-[#828282]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-5 pb-5 border-b border-[#BDBDBD]">
                <p className="text-xl text-gray-500 capitalize">win bar</p>
                <div className="flex flex-col justify-center items-center">
                  <SwitchCustomized />
                  <p className="capitalize -ml-5">available</p>
                </div>
              </div>
              <Button full>add</Button>
            </div>
          ) : (
            <div className="w-[522px] mb-5 border-[#BDBDBD] px-12 border rounded-lg mx-auto ">
              <div className="flex items-center justify-between py-5">
                <p className="text-tertiary font-bold">
                  Drag and drop to change photo order.
                </p>
                <p className="font-semibold text-gray-500">
                  1/<span className="font-bold text-tertiary ">4</span> photos
                </p>
              </div>
              <img
                src={planeAdd}
                alt="planeAdd"
                className="w-full mb-6 rounded-lg h-[205px] object-cover "
              />
              <img
                src={AddAircraftSmallIcon}
                alt="AddAircraftSmallIcon"
                className="w-[133px] rounded-lg h-[90px] object-cover mb-[164px] border-t border-b border-dashed  border-tertiary "
                />
                <div className='mb-[32px]'>

              <Button full>save</Button>
                </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AircraftAdd;

import {
  BackButton,
  Button,
  NotificationProfileHeader,
  SeatCapacity,
  SelectInput,
  SwitchCustomized,
} from "../../../components";
import aircraftPicture from "../../../assets/images/plane-4.png";
import { TextField } from "@mui/material";

const AircraftEdit = () => {
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
        <div className="rounded-lg  p-6 w-[522px] mx-auto font-semibold border mb-3 border-[#BDBDBD]">
          <div>
            <p className="capitalize text-tertiary ">photos</p>
            <img
              src={aircraftPicture}
              alt="icon"
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
              {/* <SelectInput
                label="what ever you wantwhat ever you want"
                options={[
                  {
                    name: "try",
                    value: "try",
                  },
                  {
                    name: "try",
                    value: "try",
                  },
                  {
                    name: "try",
                    value: "try",
                  },
                ]}
              /> */}
              {/* <SelectInput /> */}
            </div>
            {/* <SeatCapacity /> */}
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
            <p className="capitalize text-tertiary mb-3 font-semibold">
              description
            </p>
            <div className="px-5 py-4 border-[#BDBDBD] border rounded-lg">
              <p className="text-sm text-[#333333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique pariatur possimus quo officia repellat quaerat quas
                Similique pariatur possimus quo officia repellat quaerat quas
              </p>
            </div>
          </div>
          {/* <div className="space-y-5 pb-10 mb-10 border-b border-[#BDBDBD]">
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

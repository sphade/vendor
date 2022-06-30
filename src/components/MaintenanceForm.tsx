import Button from "./Button";
import { useState } from "react";
import Chip from "./Chip";
import DateAndTimePicker from "./DateAndTimePicker";
// import SelectInput from "./SelectInput";
import SwitchCustomized from "./SwitchCustomized";
import { useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
const MaintenanceForm = () => {
  const [bar, setBar] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="px-[65px] py-10 border border-[#BDBDBD] w-[520px] rounded-md ">
      <h1 className="font-bold    capitalize text-tertiary text-2xl mb-6">
        maintenance form
      </h1>
      <div className="divide-y space-y-6 divide-[#BDBDBD]">
        <div className="space-y-6">
          <SelectInput
            control={control}
            className="la"
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
            name="serviceType"
            size="medium"
          />

          <div className="flex items-center  justify-between gap-2">
            <div className="flex-1">
              {" "}
              <SelectInput
                control={control}
                className="la"
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
                name="serviceType"
                size="medium"
              />
            </div>{" "}
            <div className="flex-1">
              {" "}
              <SelectInput
                control={control}
                className="la"
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
                name="serviceType"
                size="medium"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="capitalize text-tertiary text-lg font-semibold    pt-6">
            Set Maintenance Date and Time
          </h2>
          <div className="space-y-2">
            <Chip variant="success"> starting</Chip>
            <DateAndTimePicker />
          </div>

          <div className="space-y-2">
            <Chip variant="warning"> ending</Chip>
            <DateAndTimePicker />
          </div>
        </div>
        <div>
          <h2 className="capitalize text-tertiary text-lg font-semibold    py-6">
            Set Maintenance Date and Time
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">status</p>
            {/* <SwitchCustomized /> */}
            <SwitchCustomized checked={bar} setChecked={setBar} />
          </div>
        </div>
        <div className="py-6">
          <Button full={true} disabled variant="primary">
            set
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceForm;

import { Switch } from "@mui/material";
import React from "react";
import Button from "../Button";
import Chip from "../Chip";
import SelectInput from "../SelectInput";
const MaintenanceForm = () => {
  return (
    <div className="px-[65px] py-10 border border-[#BDBDBD] w-[520px] rounded-md ">
      <h1 className="font-bold capitalize text-tertiary text-2xl mb-6">
        maintenance form
      </h1>
      <div className="divide-y space-y-6 divide-[#BDBDBD]">
        <div className="space-y-6">
          <SelectInput />
          <div className="flex items-center  justify-between gap-2">
            <div className="flex-1">
              <SelectInput />
            </div>{" "}
            <div className="flex-1">
              <SelectInput />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="capitalize text-tertiary text-lg font-semibold pt-6">
            Set Maintenance Date and Time
          </h2>
          <div className="space-y-2">
            <Chip variant="success"> starting</Chip>
            <SelectInput />
          </div>
          {
            // TODO: ieoeie
          }
          <div className="space-y-2">
            <Chip variant="warning"> ending</Chip>
            <SelectInput />
          </div>
        </div>
        <div>
          <h2 className="capitalize text-tertiary text-lg font-semibold py-6">
            Set Maintenance Date and Time
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">status</p>
            <Switch size="medium" />
          </div>
        </div>
        <div className="py-6">
          <Button full={true} variant="primary">
            set
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceForm;

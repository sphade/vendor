import {
  BackButton,
  Button,
  DateAndTimePicker,
  NotificationProfileHeader,
  SelectInput,
} from "../../../components";
import planeImg from "../../../assets/images/plane-4.png";
import {
  CompassIcon,
  LocationIcon,
  ToAndFroIcon,
} from "../../../assets/images/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";
const BookingForm = () => {
  const [serviceType, setServiceType] = useState<any>("");
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      serviceType: "charter",
      tripType: "roundtrip",
    },
  });
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
        <div className="w-[920px] px-20 mx-auto border-[#BDBDBD] border rounded-lg pt-[32px] p-10">
          <img
            src={planeImg}
            alt="icon"
            className="w-[760px] h-[323px] object-cover "
          />
          <div>
            <h1 className="font-semibold    capitalize text-tertiary text-2xl p-4 border-b border-[#BDBDBD]  ">
              challenger 6000
            </h1>
            <div className="mt-10 flex items-center gap-10 mb-10 ">
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
                    <p className="font-semibold    text-gray-700">Trip type</p>
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
            <div className="flex mb-8">
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={CompassIcon} alt="icon" />
                <p className="capitalize text-base">departure</p>
              </div>
              <img src={ToAndFroIcon} alt="icon" className="-mx-1  z-50" />
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={LocationIcon} alt="icon" />
                <p className="capitalize text-base">departure</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-14">
              <DateAndTimePicker />
              <DateAndTimePicker />
            </div>
            <div className="w-[218px] mx-auto">
              <Button full>create order</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;

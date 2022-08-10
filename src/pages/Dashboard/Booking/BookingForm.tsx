import {
  BackButton,
  Button,
  DateAndTimePicker,
  Loading,
  NotificationProfileHeader,
  SelectInput,
} from "../../../components";

import {
  CompassIcon,
  LocationIcon,
  ToAndFroIcon,
} from "../../../assets/images/icons";
import { useForm } from "react-hook-form";
import BookingFormSkeleton from "../../../skeleton/BookingFormSkeleton";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import localforage from "localforage";
const BookingForm = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    localforage.getItem("selectedAircraftDetails", (err, val) => {
      setDetails(val); 
      setLoading(false); 
    });
  }, []);
  
  const {
    
    control,
    watch,

  } = useForm({
    defaultValues: {
      serviceType: "charter",
      tripType: "roundtrip",
    },
  });
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
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">booking form</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main className="mb-5">
       
        <div className="w-[920px] px-20 mx-auto border-[#BDBDBD] border rounded-lg pt-[32px] p-10">
         
            <Slider {...settings}>
              {details?.ProductImages.map((image: any) => (
                <img
                  src={image?.url}
                  alt={""}
                  className="w-[760px] h-[323px] object-cover "
                  key={image?.publicId}
                />
              ))}
            </Slider>
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
                <CompassIcon/>
                <p className="capitalize text-base">departure</p>
              </div>
              <ToAndFroIcon className="-mx-1  z-50 mt-2 w-20" />
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <LocationIcon />
                <p className="capitalize text-base">departure</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-14">
              <DateAndTimePicker date={new Date()} />
              <DateAndTimePicker date={new Date()} />
            </div>
            <div className="w-[218px] mx-auto">
              <Button full>schedule flight</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;

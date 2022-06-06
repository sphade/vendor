import {
  BackButton,
  Button,
  NotificationProfileHeader,
  SelectInput,
} from "../../../components";
import planeImg from "../../../assets/images/plane-4.png";
import {
  CalenderIcon,
  ClockIcon,
  CompassIcon,
  LocationIcon,
  ToAndFroIcon,
} from "../../../assets/images/icons";
const BookingForm = () => {
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
            alt={planeImg}
            className="w-[760px] h-[323px] object-cover "
          />
          <div>
            <h1 className="font-semibold capitalize text-tertiary text-2xl p-4 border-b border-[#BDBDBD]  ">
              challenger 6000
            </h1>
            <div className="mt-10 flex items-center gap-10 mb-10 ">
              <div className="w-[158px] space-y-3">
                <p className="font-semibold text-gray-700">Service type</p>
                <SelectInput className="!-py-12" size="small" />
              </div>
              <div className="w-[158px] space-y-3">
                <p className="font-semibold text-gray-700">Trip type</p>
                <SelectInput className="!-py-12" size="small" />
              </div>
            </div>
            <div className="flex mb-8">
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={CompassIcon} alt={CompassIcon} />
                <p className="capitalize text-base">departure</p>
              </div>
              <img
                src={ToAndFroIcon}
                alt={ToAndFroIcon}
                className="-mx-1  z-50"
              />
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={LocationIcon} alt={LocationIcon} />
                <p className="capitalize text-base">departure</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-14">
              <div className="border divide-x divide-[#828282] w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
                <div className="flex gap-2 items-center pr-6">
                  <img src={CalenderIcon} alt={CalenderIcon} />
                  <p className="capitalize text-base">departure date</p>
                </div>
                <div className="flex gap-2 items-center pl-6">
                  <img src={ClockIcon} alt={ClockIcon} />
                  <p className=" text-base">12:00 pm</p>
                </div>
              </div>
              <div className="border divide-x divide-[#828282] w-full py-3 rounded flex items-center  px-6 border-[#828282] ">
                <div className="flex gap-2 items-center pr-6">
                  <img src={CalenderIcon} alt={CalenderIcon} />
                  <p className="capitalize text-base">departure date</p>
                </div>
                <div className="flex gap-2 items-center pl-6">
                  <img src={ClockIcon} alt={ClockIcon} />
                  <p className=" text-base">12:00 pm</p>
                </div>
              </div>
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

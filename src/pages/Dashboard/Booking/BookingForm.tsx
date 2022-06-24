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
            alt='icon'
            className="w-[760px] h-[323px] object-cover "
          />
          <div>
            <h1 className="font-semibold font-hindBold capitalize text-tertiary text-2xl p-4 border-b border-[#BDBDBD]  ">
              challenger 6000
            </h1>
            <div className="mt-10 flex items-center gap-10 mb-10 ">
              <div className="w-[158px] space-y-3">
                <p className="font-semibold font-hindBold text-gray-700">Service type</p>
                {/* <SelectInput className="!-py-12" size="small" /> */}
              </div>
              <div className="w-[158px] space-y-3">
                <p className="font-semibold font-hindBold text-gray-700">Trip type</p>
                {/* <SelectInput className="!-py-12" size="small" /> */}
              </div>
            </div>
            <div className="flex mb-8">
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={CompassIcon} alt='icon' />
                <p className="capitalize text-base">departure</p>
              </div>
              <img
                src={ToAndFroIcon}
                alt='icon'
                className="-mx-1  z-50"
              />
              <div className="border w-full py-3 rounded flex items-center gap-4 px-6 border-[#828282] ">
                <img src={LocationIcon} alt='icon' />
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

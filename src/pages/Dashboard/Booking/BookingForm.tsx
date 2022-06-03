import {
  BackButton,
  NotificationProfileHeader,
  SelectInput,
} from "../../../components";
import planeImg from "../../../assets/images/plane-4.png";
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
      <main>
        <div className="w-[920px] px-20 mx-auto border-[#BDBDBD] border rounded-lg pt-[32px] pb-12">
          <img
            src={planeImg}
            alt={planeImg}
            className="w-[760px] h-[323px] object-cover "
          />
          <div>
            <h1 className="font-semibold capitalize text-tertiary text-2xl p-4 border-b border-[#BDBDBD]  ">
              challenger 6000
            </h1>
            <div>
              <div className="w-[158px] space-y-3">
                <p className="font-semibold text-gray-700">Service type</p>
                <SelectInput className='!-py-12' />
              </div>
              <SelectInput />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;

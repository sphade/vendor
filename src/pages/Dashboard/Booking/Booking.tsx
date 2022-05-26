import {
  Button,
  CTabs,
  Info,
  NoOrder,
  NotificationProfileHeader,
} from "../../../components";
import { SetStateAction } from "react";
import { AddCircleIcon } from "../../../assets/images/icons";

const Booking = () => {
  return (
    <div >
      <header className="header">
        <h1 className="header-heading">
          booking
        </h1>
        <NotificationProfileHeader />
      </header>
      <Info />
      <div className="flex items-center justify-between mt-3 ">
        <CTabs
          tabLabel={[
            { label: "upcoming orders" },
            { label: "completed orders" },
          ]}
          value={0}
          setValue={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex gap-5">
          <Button size="medium" variant="primary" iconLeft={AddCircleIcon}>
            Create order
          </Button>
        </div>
      </div>
      <>
        {/* <div className="flex justify-between flex-wrap">
        <BookingCard />
      </div> */}
        <NoOrder />
      </>
    </div>
  );
};

export default Booking;

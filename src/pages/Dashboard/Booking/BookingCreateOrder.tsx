import React, { SetStateAction, useState } from "react";
import {
  BackButton,
  CTabs,
  NotificationProfileHeader,
  SearchBar,
  TabPanel,
} from "../../../components";
import BookingCard from "../../../components/cards/BookingCard";

const BookingCreateOrder = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">create order</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main>
        <div className="flex items-center justify-between">
          <CTabs
            tabLabel={[{ label: "Private jet" }, { label: "helicopiter" }]}
            value={value}
            setValue={setValue}
            // setValue={function (value: SetStateAction<number>): void {
            //   throw new Error("Function not implemented.");
            // }}
          />
          <SearchBar size="medium" />
        </div>
        <TabPanel value={value} index={0}>
          <div className="flex  justify-between flex-wrap p-2 border shadow rounded mt-5 gap-1">
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />

            {/* <AircraftCardSkeleton /> */}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex  justify-between flex-wrap p-2 border shadow rounded mt-5 gap-1">
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
          </div>
        </TabPanel>
      </main>
    </div>
  );
};

export default BookingCreateOrder;

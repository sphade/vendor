import { useState } from "react";
import {
  BackButton,
  CTabs,
  NoAircraft,
  NotificationProfileHeader,
  SearchBar,
  TabPanel,
} from "../../../components";
import BookingCard from "../../../components/cards/BookingCard";
import { useAircraft } from "../../../hooks/queries";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";

const BookingCreateOrder = () => {
  const [value, setValue] = useState<number>(0);
  const privateJet = useAircraft({ isArchived: false, category: "private jet" });
  const helicopter = useAircraft({ isArchived: false, category: "helicopter" });
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
          {privateJet.isLoading ? (
            [1, 2, 3, 4].map((id) => <JetCardSkeleton key={id} />)
          ) : !privateJet.data?.length ? (
            <NoAircraft />
          ) : (
            privateJet.data?.map((data: any, id: number) => (
              <BookingCard {...data} key={id}/>
            ))
          )}
          {privateJet.isFetching && <JetCardSkeleton />}
            {/* <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard />
            <BookingCard /> */}

            {/* <AircraftCardSkeleton /> */}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex  justify-between flex-wrap p-2 border shadow rounded mt-5 gap-1">
            {/* <BookingCard />
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
            <BookingCard /> */}
          </div>
        </TabPanel>
      </main>
    </div>
  );
};

export default BookingCreateOrder;

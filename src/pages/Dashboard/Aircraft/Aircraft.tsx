import { useState } from "react";
import addCircleIcon from "../../../assets/images/icons/add-circle.svg";
import BookingCard from "../../../components/cards/BookingCard";
import NotificationProfileHeader from "../../../components/NotificationProfileHeader";
import {
  Button,
  CTabs,
  AircraftCard,
  SearchBar,
  TabPanel,
} from "../../../components";
import { ArchiveIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
const Aircraft = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <header className="header">
        <h1 className="header-heading">
          Aircraft <span className="text-gray-400">(105)</span>
        </h1>
        <NotificationProfileHeader />
      </header>
      <div className="flex items-center justify-between mt-10 ">
        <CTabs
          tabLabel={[{ label: "private jet" }, { label: "helicopter" }]}
          value={value}
          setValue={setValue}
        />

        <div className="flex gap-5">
          <div className="border rounded flex items-center px-3.5  gap-2.5 border-gray-300">
            <img src={ArchiveIcon} alt="ArchiveIcon" />
            <p className="capitalize  text-gray-700">archive</p>
          </div>
          <SearchBar />
          <Link to="add">
            <Button size="medium" variant="primary" iconLeft={addCircleIcon}>
              add aircraft
            </Button>
          </Link>
        </div>
      </div>

      <TabPanel value={value} index={0}>
        <div className="flex  justify-between flex-wrap p-2 border shadow rounded mt-5 gap-1">
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
          <AircraftCard />
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
      <Link to="/booking/form">
        <Button iconLeft={addCircleIcon}>create order</Button>
      </Link>
    </div>
  );
};

export default Aircraft;

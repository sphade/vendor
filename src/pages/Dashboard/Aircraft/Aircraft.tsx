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
  DeleteModal,
  NoAircraft,
  Loading,
} from "../../../components";
import { ArchiveIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
import { useAircraft } from "../../../hooks/queries";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";
const Aircraft = () => {
  const [value, setValue] = useState<number>(0);
  const aircraft = useAircraft({ isArchived: false, category: "private jet" });
  const helicopter = useAircraft({ isArchived: false, category: "helicopter" });
  console.log(
    "🚀 ~ file: Aircraft.tsx ~ line 20 ~ Aircraft ~ aircraft",
    aircraft.data
  );

  return (
    <div>
      <DeleteModal />

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
          <Link
            to="archive"
            className="border rounded flex items-center px-3.5  gap-2.5 border-gray-300"
          >
            <img src={ArchiveIcon} alt="ArchiveIcon" />
            <p className="capitalize  text-gray-700">archive</p>
          </Link>
          <SearchBar />
          <Link to="add">
            <Button size="medium" variant="primary" iconLeft={addCircleIcon}>
              add aircraft
            </Button>
          </Link>
        </div>
      </div>

      <TabPanel value={value} index={0}>
        <div className="flex   flex-wrap p-2 border shadow rounded mt-5 gap-1">
          {aircraft.isLoading ? (
            // [1, 2, 3].map((id) => <JetCardSkeleton key={id} />)
          <div className='h-[300px] w-full'>
            <Loading/>
          </div>
          ) : !aircraft.data?.length ? (
            <NoAircraft />
          ) : (
            aircraft.data?.map((data: any, id: number) => (
              <AircraftCard {...data} key={id} />
            ))
          )}

          {/* <AircraftCardSkeleton /> */}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex  justify-between flex-wrap p-2 border shadow rounded mt-5 gap-1">
          {helicopter.isLoading ? (
            [1, 2, 3].map((id) => <JetCardSkeleton key={id} />)
          ) : !helicopter.data?.length ? (
            <NoAircraft />
          ) : (
            helicopter.data?.map((data: any, id: number) => (
              <AircraftCard {...data} key={id} />
            ))
          )}
        </div>
      </TabPanel>
    </div>
  );
};

export default Aircraft;

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
  EmptyCard,
} from "../../../components";
import { ArchiveIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
import { useAircraft } from "../../../hooks/queries";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";
import Error from "../../../components/Error";
const Aircraft = () => {
  const [value, setValue] = useState<number>(0);
  const privateJet = useAircraft({
    isArchived: false,
    category: "private jet",
  });
  const helicopter = useAircraft({ isArchived: false, category: "helicopter" });
  const aircraft = useAircraft({ isArchived: false });

  return (
    <div>
      <DeleteModal />

      <header className="header">
        <h1 className="header-heading">
          Aircraft <span className="text-gray-400">({aircraft?.data?.length})</span>
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
        <div className="flex justify-between min-h-[500px]  flex-wrap p-2 border shadow rounded mt-5 gap-1">
          {privateJet.isLoading ? (
            [...new Array(4)].map((id) => <JetCardSkeleton key={id} />)
          ) : privateJet.isError ? (
            <div className=" w-full">
              <Error />
            </div>
          ) : !privateJet.data?.length ? (
            <div className=" w-full">
              <EmptyCard header='you currently have no private jets' subtitle="start by adding one"/>
            </div>
          ) : (
            privateJet.data?.map((data: any, id: number) => (
              <AircraftCard {...data} key={id} />
            ))
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="flex justify-between min-h-[500px]  flex-wrap p-2 border shadow rounded mt-5 gap-1">
          {helicopter.isLoading ? (
            [...new Array(4)].map((id) => <JetCardSkeleton key={id} />)
            ) : helicopter.isError ? (
              <div className=" w-full">
                <Error />
              </div>
            ) : !helicopter.data?.length ? (
              <div className=" w-full">
                <EmptyCard header='you currently have no helicopter' subtitle="start by adding one"/>
              </div>
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

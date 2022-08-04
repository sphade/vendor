import { useState,useEffect } from "react";
import addCircleIcon from "../../../assets/images/icons/add-circle.svg";

import NotificationProfileHeader from "../../../components/NotificationProfileHeader";
import {
  Button,
  CTabs,
  AircraftCard,
  SearchBar,
  TabPanel,
  DeleteModal,
  
  EmptyCard,
} from "../../../components";
import { ArchiveIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
import { useAircraft } from "../../../hooks/queries";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";
import Error from "../../../components/Error";
import localforage from "localforage";
const Aircraft = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    localforage.setItem("selectedTag",tabValue);
  }, [tabValue]);
  useEffect(() => {
    localforage.getItem("selectedTag",(err,val:any)=>setTabValue((value: number)=>value=val));
  }, []);
  
  useEffect(() => {
    setSearch((value: string)=>value='')
  }, [setSearch, tabValue])
  
  
  const privateJet = useAircraft({
    isArchived: false,
    category: "private jet",
  });
  const helicopter = useAircraft({ isArchived: false, category: "helicopter" });
  
  const aircraftNo = useAircraft({ isArchived: false });

  return (
    <div>
      <DeleteModal />

      <header className="header">
        <h1 className="header-heading">
          Aircraft <span className="text-gray-400">({aircraftNo?.data?.length})</span>
        </h1>
        <NotificationProfileHeader />
      </header>
      <div className="flex items-center justify-between mt-10 ">
        <CTabs
          tabLabel={[{ label: "private jet" }, { label: "helicopter" }]}
          value={tabValue}
          setValue={setTabValue}
        />

        <div className="flex gap-5">
          <Link
            to="archive"
            className="border rounded flex items-center px-3.5  gap-2.5 border-gray-300"
          >
            <img src={ArchiveIcon} alt="ArchiveIcon" />
            <p className="capitalize  text-gray-700">archive</p>
          </Link>
          <SearchBar value={search} setValue={setSearch} />
          <Link to="add">
            <Button size="medium" variant="primary" iconLeft={addCircleIcon}>
              add aircraft
            </Button>
          </Link>
        </div>
      </div>

      <TabPanel value={tabValue} index={0}>
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
      <TabPanel value={tabValue} index={1}>
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

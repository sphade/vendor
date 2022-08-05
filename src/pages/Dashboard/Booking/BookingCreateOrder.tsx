import { useState ,useEffect} from "react";
import {
  BackButton,
  CTabs,
  EmptyCard,
  NotificationProfileHeader,
  SearchBar,
  TabPanel,
} from "../../../components";
import BookingCard from "../../../components/cards/BookingCard";
import Error from "../../../components/Error";
import { useAircraft } from "../../../hooks/queries";
import BookingJetCardSkeleton from "../../../skeleton/BookingJetCardSkeleton";

const BookingCreateOrder = () => {
  const [value, setValue] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    setSearch((value: string)=>value='')
  }, [setSearch, value])
  const privateJet = useAircraft({
    isArchived: false,
    category: "private jet",
    search
  });
  const helicopter = useAircraft({ isArchived: false, category: "helicopter",search });
  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center">
          <BackButton />

          <h1 className="header-heading">schedule flight</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main>
        <div className="flex items-center justify-between">
          <CTabs
            tabLabel={[{ label: "Private jet" }, { label: "helicopter" }]}
            value={value}
            setValue={setValue}
            
          />
          <SearchBar size="medium" value={search} setValue={setSearch}/>
        </div>
        <TabPanel value={value} index={0}>
          <div className="flex  min-h-[500px]  flex-wrap p-2 border shadow rounded mt-5 gap-1">
            {privateJet.isLoading ? (
              [...new Array(4)].map((id) => <BookingJetCardSkeleton key={id} />)
            ) : privateJet.isError ? (
              <div className=" w-full">
                <Error />
              </div>
            ) : !privateJet.data?.length ? (
              <div className=" w-full">
                <EmptyCard
                  header="you currently have no private jets"
                  subtitle="start by adding one"
                />
              </div>
            ) : (
              privateJet.data?.map((data: any, id: number) => (
                <BookingCard {...data} key={id} />
              ))
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex  min-h-[500px]  flex-wrap p-2 border shadow rounded mt-5 gap-1">
            {helicopter.isLoading ? (
              [...new Array(4)].map((id) => <BookingJetCardSkeleton key={id} />)
            ) : helicopter.isError ? (
              <div className=" w-full">
                <Error />
              </div>
            ) : !helicopter.data?.length ? (
              <div className=" w-full">
                <EmptyCard
                  header="you currently have no helicopter"
                  subtitle="start by adding one"
                />
              </div>
            ) : (
              helicopter.data?.map((data: any, id: number) => (
                <BookingCard {...data} key={id} />
              ))
            )}
          
          </div>
        </TabPanel>
      </main>
    </div>
  );
};

export default BookingCreateOrder;

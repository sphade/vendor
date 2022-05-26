import Table from "../../../table/Table";
import {
  ActivitiesCard,
  NotificationProfileHeader,
  SearchBar,
  TotalCard,
} from "../../../components";
import {
  NoOfTripsIcon,
  TotalAirIcon,
  TotalAmountIcon,
} from "../../../assets/images/icons";

const Overview = () => {
  return (
    <div >
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-between max-w-3xl  w-full">
          <div className="space-y-2">
            <h1 className="text-base text-tertiary font-semibold">
              DashBoard Overview
            </h1>
            <p className="text-gray-400 font-medium text-sm">06/feb/2022</p>
          </div>
          <SearchBar />
        </div>
        <NotificationProfileHeader />
      </header>
      <main>
        <div className=" grid gap-2 grid-cols-4 grid-flow-col mt-10 ">
          <TotalCard
            color="#E5FFF0"
            text="total No of aircraft"
            num="200"
            logo={TotalAirIcon}
          />
          <TotalCard
            color="#FFF9E5"
            text="Total No of trips"
            num="1200"
            logo={NoOfTripsIcon}
          />
          <TotalCard
            color="#F3E6FF"
            text="Total amount"
            num="N6m"
            logo={TotalAmountIcon}
          />
          <ActivitiesCard />
        </div>

        <Table />
      </main>
    </div>
  );
};

export default Overview;

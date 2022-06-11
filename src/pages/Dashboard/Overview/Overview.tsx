import {
  ActivitiesCard,
  NotificationProfileHeader,
  SearchBar,
  TotalCard,
} from "../../../components";
import {
  NoOfTripsIcon,
  PolygonOrangeIcon,
  TotalAirIcon,
  TotalAmountIcon,
} from "../../../assets/images/icons";
import TableM from "../../../table/Table";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div>
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
        <div className="border rounded-lg mt-10">
          <div className="flex items-center justify-between py-5 px-5">
            <h3 className="font-semibold text-lg text-tertiary  capitalize">
              table of aircraft
            </h3>
            <Link
              to="table-of-aircraft"
              className="rounded-lg  py-2 cursor-pointer bg-[#FFF6F4] font-medium text-base text-primary border-2 border-[#FFDED6] flex gap-2 px-3"
            >
              <span>View more</span>
              <img src={PolygonOrangeIcon} alt="icon" />
            </Link>
          </div>
          <TableM />
        </div>
      </main>
    </div>
  );
};

export default Overview;

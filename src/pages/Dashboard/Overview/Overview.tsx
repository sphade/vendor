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
import { Link } from "react-router-dom";
import { useOverview, useOverviewTable } from "../../../hooks/queries";
import useFormatNumber from "../../../hooks/useFormatNumber";
import { Skeleton } from "@mui/material";
import OverviewTable from "../../../table/overview/OverviewTable";

const Overview = () => {
  const { overviewData, overviewLoading } = useOverview();
  const overviewTable = useOverviewTable();
  const formatedNum = useFormatNumber(1000000000);
  console.log(
    "🚀 ~ file: Overview.tsx ~ line 22 ~ Overview ~ formatedNum",
    formatedNum
  );

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
            num={
              overviewLoading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                overviewData?.totalAircraft 
              )
            }
            logo={TotalAirIcon}
          />
          <TotalCard
            color="#FFF9E5"
            text="Total No of trips"
            num={
              overviewLoading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                overviewData?.trips 
              )
            }
            logo={NoOfTripsIcon}
          />
          {/* format the response */}
          <TotalCard
            color="#F3E6FF"
            text="Total amount"
            num={
              overviewLoading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                overviewData?.totalAmount 
              )
            }
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
          <OverviewTable />
        </div>
      </main>
    </div>
  );
};

export default Overview;

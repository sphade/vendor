import {
  ActivitiesCard,
  Loading,
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

import { aircraftColumns } from "../../../table/Columns";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import { formatNumberToCurrency } from "../../../hooks/useFormatNumberToCurrency";
const Overview = () => {
  const { overviewData, overviewLoading } = useOverview();
  const overviewTable = useOverviewTable();

  const formatedNum = useFormatNumber(1000000000);
  
  return (
    <div>
      <header className="flex items-center justify-between">
        <div className="flex items-center justify-between max-w-3xl  w-full">
          <div className="space-y-2">
            <h1 className="text-base text-tertiary    font-semibold">
              DashBoard Overview
            </h1>
            <p className="text-gray-600 font-medium text-sm">
              {format(new Date(), "dd/MMM/yyyy")}
            </p>
          </div>
          <SearchBar />
        </div>
        <NotificationProfileHeader />
      </header>
      <main>
        <div className=" grid gap-5 grid-cols-4 grid-flow-col mt-10 ">
          <TotalCard
            color="#E5FFF0"
            text="total No of aircraft"
            num={
              overviewLoading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
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
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
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
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                formatNumberToCurrency({ number: overviewData?.totalAmount })
                
              )
            }
            logo={TotalAmountIcon}
          />
          <ActivitiesCard
            loading={overviewLoading}
            revenue={overviewData?.last30Days?.revenue}
            booking={overviewData?.last30Days?.totalBooking}
          />
        </div>
        <div className="border rounded-lg mt-10">
          <div className="flex items-center justify-between py-5 px-5">
            <h3 className="font-semibold    text-lg text-tertiary  capitalize">
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
          <DataGrid
            rows={overviewTable.data?.data || []}
            getCellClassName={() =>
              "text-tertiary font-medium capitalize  !font-hind  "
            }
            rowHeight={70}
            columns={aircraftColumns}
            autoHeight={true}
            // pageSize={4}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            // selectionModel={selectionModel}
            // onSelectionModelChange={(newSelectionModel) => {
            //   setSelectionModel(newSelectionModel);
            //   console.log(newSelectionModel);
            // }}
            keepNonExistentRowsSelected
            loading={overviewTable.isLoading}
            components={{
              LoadingOverlay: Loading,
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Overview;

import {
  Button,
  CTabs,
  Info,
  NoOrder,
  NotificationProfileHeader,
} from "../../../components";
import { SetStateAction } from "react";
import { AddCircleIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { bookingColumn } from "../../../table/Columns";

const Booking = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">booking</h1>
        <NotificationProfileHeader />
      </header>
      <Info />
      <div className="flex items-center justify-between mt-3 ">
        <CTabs
          tabLabel={[
            { label: "upcoming orders" },
            { label: "completed orders" },
          ]}
          value={0}
          setValue={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Link to="create-order" className="flex gap-5">
          <Button size="medium" variant="primary" iconLeft={AddCircleIcon}>
            Create order
          </Button>
        </Link>
      </div>
      <>
        {/* <div className="flex justify-between flex-wrap">
        <BookingCard />
      </div> */}
        <DataGrid
          rows={[]}
          getCellClassName={() =>
            "text-tertiary font-medium capitalize  !font-hind  "
          }
          rowHeight={70}
          columns={bookingColumn}
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
          // loading={true}
          components={{}}
        />

        <NoOrder />
      </>
    </div>
  );
};

export default Booking;

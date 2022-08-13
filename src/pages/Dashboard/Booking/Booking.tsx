import {
  Button,
  CTabs,
  Info,
  Loading,
  NoOrder,
  NotificationProfileHeader,
} from "../../../components";
import {  useEffect, useState } from "react";
import { AddCircleIcon } from "../../../assets/images/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { bookingColumn } from "../../../table/Columns";
import { useOrder } from "../../../hooks/queries";

const Booking = () => {
  const [value, setValue] = useState<number>(0);
  const [status, setStatus] = useState<string>(()=>value === 0 ? 'pending':value === 1? 'completed':'');
  useEffect(() => {
    setStatus(()=>value === 0 ? 'pending':value === 1? 'completed':'')
  }, [value])
  

  const order = useOrder(status);

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
          value={value}
          setValue={setValue}
        />
        <Link to="create-order" className="flex gap-5">
          <Button size="medium" variant="primary" IconLeft={AddCircleIcon}>
          schedule flight
          </Button>
        </Link>
      </div>
      <>
     
        {
          
          order.data?.length===0 ? (
          <NoOrder />
        ) : (
           <DataGrid
            getCellClassName={() =>
              "text-tertiary font-medium capitalize  !font-hind  "
            }
            rowHeight={70}
            columns={bookingColumn}
            autoHeight={true}
            // pageSize={4}
                rows={order.data || []}
        rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            // selectionModel={selectionModel}
            // onSelectionModelChange={(newSelectionModel) => {
            //   setSelectionModel(newSelectionModel);
            //   console.log(newSelectionModel);
            // }}
            keepNonExistentRowsSelected
            loading={order.isLoading}
            components={{
              LoadingOverlay: Loading,
            }}
          />
        )}
      </>
    </div>
  );
};

export default Booking;

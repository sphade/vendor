import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  {
    id: 1,
    lastName: "lawal",
    firstName: "<div>lawal</div>",
  },
  { id: 2, lastName: "lawal", firstName: "adebola" },
];

const columns: GridColDef[] = [
  { field: "aircraftName", headerName: "Aircraft Name",width:110 },
  { field: "aircraftType", headerName: "Aircraft Type",width:110 },
  { field: "noOfFlight", headerName: "No of flight" },
  { field: "location", headerName: "Location" },
  { field: "serviceType", headerName: "Service Type",width:110 },
  { field: "amount", headerName: "Amount (Last Trip)",width:150 },
  { field: "date&type", headerName: "Date & Time" },
  { field: "status", headerName: "Status" },

  { field: "availability", headerName: "Availability" },
];

export default function Table() {
  return (
    <div className="w-full h-[700px]">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        disableColumnMenu={true}
        rowHeight={50}
      />
    </div>
  );
}

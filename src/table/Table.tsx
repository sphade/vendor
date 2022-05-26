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
  { field: "id", headerName: "ID", sortable: false },
  {
    field: "firstName",
    // headerName: "First Name",
    width: 300,
    type: "firstName",
    renderHeader: () => (
      <strong>
        {"birtday"}
        <span>hsjs</span>
      </strong>
    ),
  },

  { field: "lastName", headerName: "Last Name" },
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
      />
    </div>
  );
}

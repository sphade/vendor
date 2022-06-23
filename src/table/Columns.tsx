import { GridColDef } from "@mui/x-data-grid";
const headerClass = "font-medium !font-hind  text-[#828282]";

export const transactionColumn: GridColDef[] = [
  {
    field: "aircraftName",
    headerName: "Aircraft Name",
    width: 150,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "aircraftType",
    headerName: "Aircraft Type",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },

  {
    field: "serviceType",
    headerName: "Service Type",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "destination",
    headerName: "Destination",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "dateTime",
    headerName: "Date & Time",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    renderCell({ value }) {
      return (
        <div className="flex flex-col">
          <p>{value.date}</p>
          <p className="text-xs font-medium text-gray-500">{value.time}</p>
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    renderCell({ value }) {
      return <div className="text-green-500">{value}</div>;
    },
  },
];
export const bookingColumn: GridColDef[] = [
  {
    field: "aircraft",
    headerName: "Aircraft",
    width: 150,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },

  {
    field: "serviceType",
    headerName: "Service Type",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "tripType",
    headerName: "Trip Type",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "depLocation",
    headerName: "dep. Location",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "destination",
    headerName: "Destination",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "depatureDateTime",
    headerName: "Depature Date & Time",
    width: 105,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    renderCell({ value }) {
      return (
        <div className="flex flex-col">
          <p>{value.date}</p>
          <p className="text-xs font-medium text-gray-500">{value.time}</p>
        </div>
      );
    },
  },

  {
    field: "status",
    headerName: "Status",
    width: 80,
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    renderCell({ value }) {
      return <div className="text-green-500">{value}</div>;
    },
  },
];

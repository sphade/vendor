import { GridColDef } from "@mui/x-data-grid";
import classNames from "classnames";
import { CalenderDropDownActiveIcon,CalenderDropDownIcon } from "../assets/images/icons";
import { format } from "date-fns";
import { formatNumberToCurrency } from "../hooks/useFormatNumberToCurrency";
const headerClass = "font-medium !font-hind  text-[#828282]";

export const aircraftColumns: GridColDef[] = [
  {
    field: "aircraftName",
    headerName: "Aircraft Name",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    valueGetter: (params: any) => `${params.row.brand} ${params.row.model}`,
  },
  {
    field: "airCraftType",
    headerName: "Aircraft Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "totalFlights",
    headerName: "No Of Flight",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "serviceType",
    headerName: "Service Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "lastTripAmount",
    headerName: "Amount (last Trip)",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    renderCell({ value }) {
      return (
        <div className="items-center">
          {
            formatNumberToCurrency({ number:value  })
          }   
        </div>
      );
    },
    
  },
  {
    field: "createdAt",
    headerName: "Date & Time",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    renderCell({ value }) {
      return (
        <div className="items-center">
          <p>{format(new Date(value), "dd/MMM/yyyy")}</p>
          <p className="text-xs font-medium text-gray-500">
            {format(new Date(value), "h:m aaa")}
          </p>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    renderCell({ value }) {
      return <div className="text-green-500">{value}</div>;
    },
  },

  {
    field: "isAvailable",
    headerName: "Availability",
    hideSortIcons: true,
    disableColumnMenu: true,
    renderCell({ value }) {
      
      return <img src={value ?  CalenderDropDownActiveIcon : CalenderDropDownIcon} alt={value} />;
    },
    headerClassName: headerClass,

    flex: 1,
  },
];
export const transactionColumn: GridColDef[] = [
  {
    field: "aircraftName",
    headerName: "Aircraft Name",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    valueGetter: (params: any) => `${params.row.Aircraft.tag || ""}`,
  },
  {
    field: "aircraftType",
    headerName: "Aircraft Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    valueGetter: (params: any) => `${params.row.Aircraft.airCraftType || ""}`,
  },

  {
    field: "serviceType",
    headerName: "Service Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    valueGetter: (params: any) => `${params.row.Aircraft.serviceType || ""}`,
  },
  {
    field: "destination",
    headerName: "Destination",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
    valueGetter: (params: any) => `${params.row.destination?.name || ""}`,
  },
  {
    field: "departureDate",
    headerName: "Date & Time",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,

    renderCell({ value }) {
      return (
        <div className="flex items-center">
          <span>{format(new Date(value), "dd/MMM/yyyy - ")}</span>
          <span className="text-xs font-medium text-gray-500">
            {format(new Date(value), "h:m aaa")}
          </span>
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,

    renderCell({ value }) {
      return (
        <div
          className={classNames({
            "text-green-500": value === "successful",
            "text-orange-500": value === "pending",
            "text-red-500": value === "failed",
          })}
        >
          {value}
        </div>
      );
    },
  },
];
export const bookingColumn: GridColDef[] = [
  {
    field: "aircraft",
    headerName: "Aircraft",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },

  {
    field: "serviceType",
    headerName: "Service Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "tripType",
    headerName: "Trip Type",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "depLocation",
    headerName: "dep. Location",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "destination",
    headerName: "Destination",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "depatureDateTime",
    headerName: "Depature Date & Time",
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,

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
    headerClassName: headerClass,
    hideSortIcons: true,
    disableColumnMenu: true,
    flex: 1,

    renderCell({ value }) {
      return <div className="text-green-500">{value}</div>;
    },
  },
];

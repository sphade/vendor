import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  
  GridSelectionModel,
} from "@mui/x-data-grid";

import { CalenderDropDownActiveIcon } from "../../assets/images/icons";
const headerClass = 'font-medium !font-hind  text-[#828282]'
const columns: GridColDef[] = [
  { field: "aircraftName", headerName: "Aircraft Name", width: 150, headerClassName:headerClass },
  {
    field: "aircraftType",
    headerName: "Aircraft Type",
    width: 105, headerClassName:headerClass
  },
  {
    field: "noOfFlight",
    headerName: "No Of Flight",
    width: 105, headerClassName:headerClass
  },
  {
    field: "location",
    headerName: "Location",
    width: 75, headerClassName:headerClass
  },
  {
    field: "serviceType",
    headerName: "Service Type",
    width: 105, headerClassName:headerClass
  },
  {
    field: "amount",
    headerName: "Amount (last Trip)",
    width: 150,
    headerClassName:headerClass
  },
  {
    field: "dateTime",
    headerName: "Date & Time",
    width: 105, headerClassName:headerClass,
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
    width: 80, headerClassName: headerClass,
    renderCell({ value }) {
     
      return (
        <div className="text-green-500">
          {value}
        </div>
      );
    },
  },

  {
    field: "availability",
    headerName: "Availability",
    hideSortIcons: true,
    disableColumnMenu: true,
    width: 100,
    renderCell({ value }) {
      return <img  src={CalenderDropDownActiveIcon} alt={value} />;
    },
    headerClassName:headerClass
  },
];

export const aircraftRows: any[] = [
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-15000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,1000,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-10000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-15000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-15000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "1:30pm" },

    status: "Active",
    availability: "yes",
  },
  {
    id: Math.random() * 10,
    aircraftName: "sky-night-15000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "15-mar-2022", time: "1:30pm" },
    status: "Active",
    availability: "yes",
  },
];

export default function DataGridDemo() {
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);
  return (
    <Box sx={{ width: "100%", }}>
      <DataGrid
        rows={[]}
        getCellClassName={() =>
          "text-tertiary font-medium capitalize  !font-hind  "
        }
        rowHeight={70}

        columns={columns}
        autoHeight={true}
        // pageSize={4}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
          console.log(newSelectionModel);
        }}
        keepNonExistentRowsSelected
        // loading={true}
        components={{}}
      />
    </Box>
  );
}

// import Table from "rc-table";
import Paper from "@mui/material/Paper";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { format } from "date-fns";
import {
  CalenderDropDownActiveIcon,
  CalenderDropDownIcon,
} from "../../assets/images/icons";
import { BodyCell, HeadCell } from "../Instance";

const data = [
  {
    id: "a61a6c5a-e024-4f14-88a2-d0e19deedaa5",
    tag: "elepaq-5000-2000-asaba",
    airCraftType: "private jet",
    serviceType: "jet pooling",
    brand: "Elepaq",
    model: "5000",
    year: 2000,
    price: 50000,
    description: "this hkkfsf is helicopter that take whatevere",
    capacity: 50,
    bar: true,
    cabinLength: "51.00",
    cabinHeight: "52.00",
    cabinWidth: "50.00",
    baggageCapacity: 500,
    flightHours: "52",
    maxRange: 520,
    maxSpeed: "550.00",
    maxAltitude: 500,
    isAvailable: true,
    isArchived: false,
    status: "Active",
    maintenanceFrom: null,
    maintenanceTo: null,
    createdAt: "2022-04-13T14:37:12.689Z",
    updatedAt: "2022-04-20T20:06:31.018Z",
    location: "Murtala Muhammed International Airport",
    totalFlights: 2,
    lastTripAmount: 50000,
    lastTripDate: "2022-02-01T08:45:00.000Z",
  },
  {
    id: "a61a6c5a-e024-4f14-88a2-d0e19deedaa5",
    tag: "elepaq-5000-2000-asaba",
    airCraftType: "private jet",
    serviceType: "jet pooling",
    brand: "Elepaq",
    model: "5000",
    year: 2000,
    price: 50000,
    description: "this hkkfsf is helicopter that take whatevere",
    capacity: 50,
    bar: true,
    cabinLength: "51.00",
    cabinHeight: "52.00",
    cabinWidth: "50.00",
    baggageCapacity: 500,
    flightHours: "52",
    maxRange: 520,
    maxSpeed: "550.00",
    maxAltitude: 500,
    isAvailable: true,
    isArchived: false,
    status: "Active",
    maintenanceFrom: null,
    maintenanceTo: null,
    createdAt: "2022-04-13T14:37:12.689Z",
    updatedAt: "2022-04-20T20:06:31.018Z",
    location: "Murtala Muhammed International Airport",
    totalFlights: 2,
    lastTripAmount: 50000,
    lastTripDate: "2022-02-01T08:45:00.000Z",
  },
];

// export default TableM;
const OverviewTable = ({ loading }: { loading?: boolean }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="!text-3xl">
            <TableRow className="!text-3xl">
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <HeadCell>Aircraft Name</HeadCell>

              <HeadCell>Aircraft Type</HeadCell>
              <HeadCell>No of flight</HeadCell>
              <HeadCell>Location</HeadCell>
              <HeadCell>Service Type</HeadCell>
              <HeadCell>Amount (last Trip)</HeadCell>
              <HeadCell>Date & Time</HeadCell>
              <HeadCell>Status</HeadCell>
              <HeadCell>Availability</HeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                className="!text-center  hover:bg-gray-50 default-transition"
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <BodyCell>
                  {row.brand}
                  {row.model}
                </BodyCell>
                <BodyCell>{row.airCraftType}</BodyCell>
                <BodyCell>{row.totalFlights}</BodyCell>
                <BodyCell>{row.location && "m m i"}</BodyCell>
                <BodyCell>{row.serviceType}</BodyCell>
                <BodyCell>{row.lastTripAmount}</BodyCell>
                <BodyCell>
                  <p>{format(new Date(row.lastTripDate), "dd-MM-yyyy")}</p>
                  <br />
                </BodyCell>
                <BodyCell>
                  {row.status === "Active" ? (
                    <p className="text-green-500 font-semibold">Active</p>
                  ) : (
                    <p className="text-green-500 font-semibold">inActive</p>
                  )}
                </BodyCell>
                {/* <BodyCell>
                  <p>{row.dateTime.date}</p>
                  <br />
                  <p className="text-gray-400 text-sm ">{row.dateTime.time}</p>
                </BodyCell>
                <BodyCell>{row.location}</BodyCell>
                <BodyCell>{row.location}</BodyCell>
                <BodyCell>
                  <p className="text-green-500 font-semibold">{row.status}</p>
                </BodyCell> */}
                {/* <BodyCell>{row.dateTime}</BodyCell> */}
                <BodyCell>
                  <img
                    src={
                      row.isAvailable
                        ? CalenderDropDownActiveIcon
                        : CalenderDropDownIcon
                    }
                    alt="CalenderDropDownIcon"
                    className="py-1"
                  />
                </BodyCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OverviewTable;

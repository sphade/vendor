// import Table from "rc-table";

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
import { CalenderDropDownActiveIcon } from "../assets/images/icons";

const data = [
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",

    status: "Active",
    availability: "yes",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: "14-mar-2022",
    status: "Active",
    availability: "yes",
  },
];

const HeadCell = ({ children }: { children: string }) => {
  return (
    <TableCell className="!text-gray-500 !capitalize ">{children}</TableCell>
  );
};
const BodyCell = ({ children }: { children: any }) => {
  return (
    <TableCell className="!capitalize !font-medium">{children}</TableCell>
  );
};
// export default TableM;
const TableM = () => {
  return (
    <div>
      <TableContainer>
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
              {/* <HeadCell>Date & Time</HeadCell> */}
              <HeadCell>Status</HeadCell>
              <HeadCell>Availability</HeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow className="!text-center hover:bg-gray-100 default-transition">
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <BodyCell>{row.aircraftName}</BodyCell>
                <BodyCell>{row.aircraftType}</BodyCell>
                <BodyCell>{row.noOfFlight}</BodyCell>
                <BodyCell>{row.noOfFlight}</BodyCell>
                <BodyCell>{row.availability}</BodyCell>
                <BodyCell>{row.location}</BodyCell>
                <BodyCell>
                  <p className="text-primary">{row.status}</p>
                </BodyCell>
                {/* <BodyCell>{row.dateTime}</BodyCell> */}
                <BodyCell>
                  <img
                    src={CalenderDropDownActiveIcon}
                    alt="CalenderDropDownActiveIcon"
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

export default TableM;

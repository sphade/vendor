// import Table from "rc-table";
import Paper from '@mui/material/Paper';
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
import { BodyCell, HeadCell } from "../Instance";

const data = [
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    serviceType: "chater",
    destination: "Nnamdi azikiwe",
    dateTime: "14-mar-2022",
    amount: "$1,400,00",
    status: "complete",
  },
];

// export default TableM;
const TransactionTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="!text-3xl">
            <TableRow className="!text-3xl">
              <TableCell 
               
              padding="checkbox"
              >
                <Checkbox />
              </TableCell>
              <HeadCell>Aircraft Name</HeadCell>

              <HeadCell>Aircraft Type</HeadCell>
              <HeadCell>service type</HeadCell>
              <HeadCell>destination</HeadCell>
              <HeadCell>date & time</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell>Status</HeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.aircraftName} className="!text-center hover:bg-gray-100 default-transition">
                <TableCell
                 
                  padding="checkbox"
                >
                  <Checkbox />
                </TableCell>
                <BodyCell>{row.aircraftName}</BodyCell>
                <BodyCell>{row.aircraftType}</BodyCell>
                <BodyCell>{row.serviceType}</BodyCell>
                <BodyCell>{row.destination}</BodyCell>
                <BodyCell>{row.dateTime}</BodyCell>
                <BodyCell>{row.amount}</BodyCell>
                <BodyCell>
                  <p className="text-green-500">{row.status}</p>
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

export default TransactionTable;

import Table from "rc-table";
import { Button } from "../components";

const columns = [
  {
    title: "Aircraft Name",
    dataIndex: "aircraftName",
    key: "aircraftName",
    width: 300,
  },
  {
    title: "Aircraft Type",
    dataIndex: "aircraftType",
    key: "aircraftType",
    width: 300,
  },
  {
    title: "No. of flight",
    dataIndex: "noOfFlight",
    key: "noOfFlight",
    width: 300,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    width: 300,
  },
  {
    title: "Service Type",
    dataIndex: "serviceType",
    key: "serviceType",
    width: 300,
  },
  {
    title: "Amount (last Trip)",
    dataIndex: "amount",
    key: "amount",
    width: 300,
  },
  {
    title: "Date & Time",
    dataIndex: "dateTime",
    key: "dateTime",
    width: 300,
    render: (text: { date: string; time: string }) => (
      <div className="text-black">
        {text.date} <br /> <span className="text-gray-400">{text.time}</span>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 300,
    render: (text: string) => (
      <div className="text-green-500 font-bold">{text}</div>
    ),
  },
  {
    title: "Availability",
    dataIndex: "availability",
    key: "availability",
    render: (text: string) => <div>{text}</div>,
    // width: 300,
    fixed: true,
    // colSpan:3900,
    className: "bg-red-900",
  },
];

const data = [
  {
    aircraftName: "sky-night-6000",
    aircraftType: "private jet",
    noOfFlight: "250",
    location: "MM 1",
    serviceType: "Air chater",
    amount: "$1,400,00",
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
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
    dateTime: { date: "14-mar-2022", time: "11:30 Am" },
    status: "Active",
    availability: "yes",
  },
];

const TableM = () => {
  return (
    <Table
      columns={columns}
      data={data}
      className="text-[#828282] w-full flex text-center text-base font-thin h-[300px] overflow-scroll "
      rowClassName=" border text-gray-900  hover:bg-gray-100 !mx-[400px]"
      tableLayout="fixed"
      indentSize={10}
      showHeader={true}
      sticky={true}
    />
  );
};

export default TableM;

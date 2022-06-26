import { PolygonIcon } from "../../../assets/images/icons";
import { BackButton, NotificationProfileHeader, SearchBar } from "../../../components";
import TableM from "../../../table/Table";
import DataGridDemo from "../../../table/overview/OverviewTable";

const TableOfAircraft = () => {
  return (
    <div>
          <header className="header">
          <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">table of aircraft</h1>
        </div>
        <NotificationProfileHeader />
      </header>
      <div className="flex justify-end items-center space-x-5 mt-7">
        <SearchBar size="medium" />

        <div className="bg-gray-200 text-sm text-center flex items-center font-medium capitalize   rounded-md divide-gray-500  divide-x px-3 py-3">
          <p className="px-3">sort by</p>
          <div className="px-3 flex items-center">
            <p>Latest date</p>
            <img src={PolygonIcon} alt="PolygonIcon" className="ml-1" />
          </div>
        </div>
      </div>
      <div className="border rounded-lg mt-6">
       <DataGridDemo/>
      </div>
    </div>
  );
};

export default TableOfAircraft;
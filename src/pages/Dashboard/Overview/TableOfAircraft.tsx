import { PolygonIcon } from "../../../assets/images/icons";
import { NotificationProfileHeader, SearchBar } from "../../../components";
import TableM from "../../../table/Table";
const TableOfAircraft = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">table of aircraft</h1>
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
      <TableM />
    </div>
  );
};

export default TableOfAircraft;

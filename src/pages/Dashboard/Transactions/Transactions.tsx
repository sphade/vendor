import {
  NotificationProfileHeader,
  ProfileDropDown,
  SearchBar,
} from "../../../components";
import Table from "../../../table/Table";
const Transactions = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">Transaction</h1>
        <NotificationProfileHeader />
      </header>
      <div className="flex justify-end items-center space-x-5 mt-7">
        <SearchBar size="medium" />
        <div className="bg-gray-200 text-sm text-center flex items-center font-medium capitalize   rounded-md divide-gray-500  divide-x px-3 py-2">
          <p className="px-3">sort by</p>
          <p className="px-3">Latest date</p>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Transactions;

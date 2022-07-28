import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { PolygonIcon } from "../../../assets/images/icons";
import { Loading, NotificationProfileHeader, SearchBar } from "../../../components";
import { useTransactionTable } from "../../../hooks/queries";
import { transactionColumn } from "../../../table/Columns";
import TransactionTable from "../../../table/transactions/Table";
const Transactions = () => {
  const [search,setSearch] = useState('')
  const transactionTable = useTransactionTable({search});
  return (
    <div>
      <header className="header">
        <h1 className="header-heading">Transaction</h1>
        <NotificationProfileHeader />
      </header>
      <div className="flex justify-end items-center space-x-5 mt-7">
        <SearchBar size="medium" value={search} setValue={setSearch} />

        <div className="  bg-gray-200 text-sm text-center flex items-center font-medium capitalize   rounded-md divide-gray-500  divide-x px-3 py-3">
          <p className="px-3">sort by</p>
          <div className="px-3 flex items-center">
            <p>Latest date</p>
            <img src={PolygonIcon} alt="PolygonIcon" className="ml-1" />
          </div>
        </div>
      </div>
      <div className="border rounded-lg mt-6">
        <DataGrid
          rows={transactionTable.data || []}
          getCellClassName={() =>
            "text-tertiary font-medium capitalize  !font-hind  "
          }
          rowHeight={70}
          columns={transactionColumn}
          autoHeight={true}
          // pageSize={4}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          // selectionModel={selectionModel}
          // onSelectionModelChange={(newSelectionModel) => {
          //   setSelectionModel(newSelectionModel);
          //   console.log(newSelectionModel);
          // }}
          keepNonExistentRowsSelected
          loading={transactionTable.isLoading}
          components={{
            LoadingOverlay: Loading,

          }}
        />
      </div>
    </div>
  );
};

export default Transactions;

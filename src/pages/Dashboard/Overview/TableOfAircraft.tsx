import { PolygonIcon } from "../../../assets/images/icons";
import { BackButton, Loading, NotificationProfileHeader, SearchBar } from "../../../components";

import { useTransactionTable } from "../../../hooks/queries";
import { DataGrid } from "@mui/x-data-grid";
import { transactionColumn } from "../../../table/Columns";
import { useState } from "react";
import CustomPagination from "../../../components/CustomPagination";

const TableOfAircraft = () => {
  const[search,setSearch] = useState('')
  const[page,setPage] = useState(1)

  const transactionTable = useTransactionTable({search,page});
  return (
    <div>
          <header className="header">
          <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">aircraft Transactions</h1>
        </div>
        <NotificationProfileHeader />
      </header>
      <div className="flex justify-end items-center space-x-5 mt-7">
        <SearchBar size="medium"value={search} setValue={setSearch} />

        <div className="bg-gray-200 text-sm text-center flex items-center font-medium capitalize   rounded-md divide-gray-500  divide-x px-3 py-3">
          <p className="px-3">sort by</p>
          <div className="px-3 flex items-center">
            <p>Latest date</p>
            <PolygonIcon className="ml-2 mb-1" />
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
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          pagination
          // pageSize={5}
          page={page}
          paginationMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          keepNonExistentRowsSelected
          loading={transactionTable.isLoading}
          components={{
            LoadingOverlay: Loading,
            Pagination: CustomPagination,
          }}
        />
      </div>
    </div>
  );
};

export default TableOfAircraft;

import { PolygonIcon } from "../../../assets/images/icons";
import { BackButton, Loading, NotificationProfileHeader, SearchBar } from "../../../components";
import TableM from "../../../table/Table";
import DataGridDemo from "../../../table/overview/OverviewTable";
import { useOverviewTable } from "../../../hooks/queries";
import { DataGrid } from "@mui/x-data-grid";
import { aircraftColumns } from "../../../table/Columns";

const TableOfAircraft = () => {
  const overviewTable = useOverviewTable();

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
      <DataGrid
            rows={overviewTable.data?.data || []}
            getCellClassName={() =>
              "text-tertiary font-medium capitalize  !font-hind  "
            }
            rowHeight={70}
            columns={aircraftColumns}
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
            loading={overviewTable.isLoading}
            components={{
              LoadingOverlay: Loading,
            }}
          />
      </div>
    </div>
  );
};

export default TableOfAircraft;

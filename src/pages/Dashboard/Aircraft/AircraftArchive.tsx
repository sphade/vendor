import { Checkbox, Skeleton } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TrashGrayIcon, UnArchiveIcon } from "../../../assets/images/icons";
import {
  AircraftCard,
  BackButton,
  NotificationProfileHeader,
} from "../../../components";
import DeleteArchiveModal from "../../../components/modal/DeleteArchiveModal";
import {
  useArchiveAircraft,
  useDeleteAircraft,
} from "../../../hooks/mutations";
import { useAircraft } from "../../../hooks/queries";
import { toggleDeleteArchiveModal } from "../../../redux/slices/ModalSlice";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";

const AircraftArchive = () => {
  const aircraftArchive = useAircraft({ isArchived: true });
  const [arrayLength, setArrayLength] = useState(aircraftArchive?.data?.length);
  const [aircraft, setAircraft] = useState<any>([]);
  const archive = useArchiveAircraft();
  const deleteAircraft = useDeleteAircraft();

  const dispatch = useDispatch();
  const [checkedState, setCheckedState] = useState(
    new Array(arrayLength).fill(false)
  );
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setArrayLength(aircraftArchive?.data?.length);
    setCheckedState(new Array(arrayLength).fill(false));
  }, [aircraftArchive?.data?.length, arrayLength]);
  useEffect(() => {
    archive.isSuccess &&
      enqueueSnackbar("unarchived successfully", {
        variant: "success",
      });
  }, [archive.isSuccess, enqueueSnackbar]);
  useEffect(() => {
    if (deleteAircraft.isSuccess) {
      // enqueueSnackbar("aircraft(s) deleted  successfully", {
      //   variant: "success",
      // });
      dispatch(toggleDeleteArchiveModal());
    }
  }, [deleteAircraft.isSuccess, dispatch]);

  const handleOnChange = (position: any, data: any) => {
    const updatedCheckedState: any = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    setAircraft([...aircraft, data]);
  };
  const unArchive = () => {
    aircraft.forEach((item: any) => {
      archive.mutate(item?.id);
    });
  };
  const deleteAircraftFc = () => {
    aircraft.forEach((item: any) => {
      deleteAircraft.mutate({ id: item?.id });
    });
  };
  return (
    <div>
      <header className="header !mb-5">
        <div className="space-x-3 flex items-center ">
          <BackButton />
          <h1 className="header-heading">archive</h1>
        </div>

        <NotificationProfileHeader />
      </header>
      <main className="border rounded-lg p-3 ">
        <DeleteArchiveModal deleteAircraftFc={deleteAircraftFc} loading={deleteAircraft.isLoading} />
        {checkedState.every((element) => element === false) ? null : (
          <div className="py-5 rounded divide-gray-600 border shadow-lg divide-x flex items-center w-fit ml-3">
            <div
              className="px-5 flex items-center gap-2 cursor-pointer"
              onClick={unArchive}
            >
              <UnArchiveIcon />
              <p className="capitalize">unarchive</p>
            </div>
            <div
              className="px-5  flex items-center gap-2 cursor-pointer"
              onClick={() => dispatch(toggleDeleteArchiveModal())}
            >
              <TrashGrayIcon />
              <p className="capitalize">delete permanently</p>
            </div>
          </div>
        )}
        <div className="flex flex-wrap  gap-5 mt-5">
          {aircraftArchive.isLoading ? (
            [1, 2, 3].map((id) => (
              <div className="flex gap-4 items-start" key={id}>
                <Skeleton width="30px" height="40px" />
                <JetCardSkeleton />
              </div>
            ))
          ) : !aircraftArchive.data?.length ? (
            <h1 className="text-gray-400 capitalize center-element w-full h-[70vh] font-semibold text-2xl">
              archive is empty
            </h1>
          ) : (
            aircraftArchive.data?.map((data: any, id: number) => {
              return (
                <div className="flex gap-4 items-start" key={id}>
                  <Checkbox
                    checked={checkedState[id]}
                    onChange={() => handleOnChange(id, data)}
                  />

                  <AircraftCard {...data} />
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default AircraftArchive;

import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TrashGrayIcon, UnArchiveIcon } from "../../../assets/images/icons";
import {
  AircraftArchivedCard,
  AircraftCard,
  BackButton,
  NotificationProfileHeader,
} from "../../../components";
import DeleteArchiveModal from "../../../components/modal/DeleteArchiveModal";
import { useAircraftIsArchive } from "../../../hooks/queries";
import { toggleDeleteArchiveModal } from "../../../redux/slices/ModalSlice";

const AircraftArchive = () => {
  const aircraftArchive = useAircraftIsArchive({ isArchived: true });

  const dispatch = useDispatch();
  const arc = [1, 2, 3, 4];
  const [checkedState, setCheckedState] = useState(
    new Array(arc.length).fill(false)
  );
  let checker = (arr: any) => arr.some((arr: any) => arr === false);
  const handleCheckChange = (position: any) => {
    const updateCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updateCheckedState);
    console.log(checkedState);
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
        <DeleteArchiveModal />
        {checker(checkedState) ? (
          <div className="py-5 rounded divide-gray-600 border shadow-lg divide-x flex items-center w-fit ml-3">
            <div className="px-5 flex items-center gap-2 cursor-pointer">
              <img src={UnArchiveIcon} alt="UnArchiveIcon" />
              <p className="capitalize">unarchive</p>
            </div>
            <div
              className="px-5  flex items-center gap-2 cursor-pointer"
              onClick={() => dispatch(toggleDeleteArchiveModal())}
            >
              <img src={TrashGrayIcon} alt="TrashGrayIcon" />
              <p className="capitalize">delete permanently</p>
            </div>
          </div>
        ) : null}
        <div className="flex flex-wrap justify-between gap-5 mt-5">
          {aircraftArchive.data?.map((data: any, id: number) => (
            <div className="flex gap-4 items-start" key={id}>
              <Checkbox />
              <AircraftCard {...data} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AircraftArchive;

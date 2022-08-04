import { Checkbox, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TrashGrayIcon, UnArchiveIcon } from "../../../assets/images/icons";
import {
 
  AircraftCard,
  BackButton,
  
  NotificationProfileHeader,
} from "../../../components";
import DeleteArchiveModal from "../../../components/modal/DeleteArchiveModal";
import { useAircraft } from "../../../hooks/queries";
import { toggleDeleteArchiveModal } from "../../../redux/slices/ModalSlice";
import JetCardSkeleton from "../../../skeleton/JetCardSkeleton";

const AircraftArchive = () => {
  const aircraftArchive = useAircraft({ isArchived: true });

  const dispatch = useDispatch();
  const arc = [1, 2, 3, 4];
  const [checkedState] = useState(
    new Array(arc.length).fill(false)
  );
  const [checked,setChecked] = useState(
    false
  );
  
 
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
        {checked ? (
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
        <div className="flex flex-wrap  gap-5 mt-5">
        {aircraftArchive.isLoading ? (
            [1, 2, 3].map((id) => (
            <div className="flex gap-4 items-start" key={id}>
              <Skeleton width='30px' height='40px'/>
                <JetCardSkeleton />
              </div>
            ))
          ) : !aircraftArchive.data?.length ? (
            <h1 className='text-gray-400 capitalize center-element w-full h-[70vh] font-semibold text-2xl'>archive is empty</h1>
          ) : (
            aircraftArchive.data?.map((data: any, id: number) => (
              <div className="flex gap-4 items-start" key={id}>
                <Checkbox checked={ checked} onChange={()=>setChecked(!checked)} />
                <AircraftCard {...data} />
              </div>
            ))
          )}
        
        </div>
      </main>
    </div>
  );
};

export default AircraftArchive;

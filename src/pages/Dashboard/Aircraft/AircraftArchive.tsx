import { Checkbox } from "@mui/material";
import { TrashGrayIcon, UnArchiveIcon } from "../../../assets/images/icons";
import {
  AircraftCard,
  BackButton,
  NotificationProfileHeader,
} from "../../../components";

const AircraftArchive = () => {
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
        <div className="py-5 rounded divide-gray-600 border shadow-lg divide-x flex items-center w-fit ml-3">
          <div className="px-5 flex items-center gap-2">
            <img src={UnArchiveIcon} alt="UnArchiveIcon" />
            <p className="capitalize">unarchive</p>
          </div>
          <div className="px-5  flex items-center gap-2">
            <img src={TrashGrayIcon} alt="TrashGrayIcon" />
            <p className="capitalize">delete permanently</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5 mt-5">
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>{" "}
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>{" "}
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>{" "}
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>{" "}
          <div className="flex gap-4 items-start">
            <Checkbox />
            <AircraftCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AircraftArchive;

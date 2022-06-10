import { Route, Routes } from "react-router-dom";
import Aircraft from "./Aircraft";
import AircraftAdd from "./AircraftAdd";
import AircraftArchive from "./AircraftArchive";
import AircraftDetails from "./AircraftDetails";
import AircraftEdit from "./AircraftEdit";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Aircraft />} />
      <Route path="/details" element={<AircraftDetails />} />
      <Route path="/edit" element={<AircraftEdit />} />
      <Route path="/add" element={<AircraftAdd />} />
      <Route path="/archive" element={<AircraftArchive />} />
    </Routes>
  );
};

export default Index;

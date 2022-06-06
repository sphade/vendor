import { Route, Routes } from "react-router-dom";
import Aircraft from "./Aircraft";
import AircraftAdd from "./AircraftAdd";
import AircraftDetails from "./AircraftDetails";
import AircraftEdit from "./AircraftEdit";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Aircraft />} />
      <Route path="/details" element={<AircraftDetails />} />
      <Route path="/edit" element={<AircraftEdit />} />
      <Route path="/add" element={<AircraftAdd />} />
    </Routes>
  );
};

export default Index;

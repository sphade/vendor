import { Route, Routes } from "react-router-dom";
import Aircraft from "./Aircraft";
import AircraftDetails from "./AircraftDetails";
import AircraftEdit from "./AircraftEdit";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Aircraft />} />
      <Route path="/details" element={<AircraftDetails />} />
      <Route path="/edit" element={<AircraftEdit />} />
    </Routes>
  );
};

export default Index;

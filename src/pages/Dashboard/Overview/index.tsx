import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import TableOfAircraft from "./TableOfAircraft";


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/table-of-aircraft" element={<TableOfAircraft />} />
     
    </Routes>
  );
};

export default Index;

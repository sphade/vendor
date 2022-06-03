import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import BookingForm from "./BookingForm";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Booking />} />
      <Route path="/form" element={<BookingForm />} />
    </Routes>
  );
};

export default Index;

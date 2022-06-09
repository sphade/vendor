import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import BookingCreateOrder from "./BookingCreateOrder";
import BookingForm from "./BookingForm";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Booking />} />
      <Route path="/form" element={<BookingForm />} />
      <Route path="/create-order" element={<BookingCreateOrder />} />
    </Routes>
  );
};

export default Index;

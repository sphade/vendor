import { Route, Routes } from "react-router-dom";
import AccountCreated from "./AccountCreated";
import EmailVerification from "./EmailVerification";
import PhoneNumberVerification from "./PhoneNumberVerification";
const Index = () => {
  return (
    <Routes>
      <Route path="/email" element={<EmailVerification />} />
      <Route path="/number" element={<PhoneNumberVerification />} />
      <Route path="/account-created" element={<AccountCreated />} />
    </Routes>
  );
};

export default Index;

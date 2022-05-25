import { TextField } from "@mui/material";
import { Button } from "../../../components";

const ForgotPassword2 = () => {
  return (
    <div className="w-[680px] py-[50px] rounded-md shadow-md bg-secondary center-element">
      <div className="w-[60%]">
        <h3 className="text-tertiary text-center uppercase text-lg font-bold mb-2">
          Forgot Password
        </h3>
        <p className="text-center text-base text-gray-600 mb-10">
          A reset code would be sent to you shortly
        </p>
        <TextField fullWidth label="Phone Number" className="mb-10" />
        <Button variant="tertiary"  full >send code</Button>
        <p className="text-center mt-3">
          Didn't get the code,{" "}
          <span className="text-primary font-semibold">use Email</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword2;

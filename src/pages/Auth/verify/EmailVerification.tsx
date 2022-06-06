// import { useState } from "react";
import ReactCodeInput from "react-code-input";
// import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "../../../components";

const EmailVerification = () => {
  /**
   * email verification page
   */
  // const [otp, setOtp] = useState<string>();

  // const handleChange = (otpInput: string) => {
  //   setOtp(otpInput);
  //   console.log(otp);
  // };

  return (
    <div className="w-[680px] py-10 bg-white   rounded-lg shadow-lg text-center ">
      <div className=" space-y-3 w-[400px] mx-auto">
        <h1 className=" uppercase text-lg font-bold ">email verification</h1>
        <p className="text-base text-gray-600 pb-6">
          Enter the 6 digit verification code sent to: <br />
          <span className="text-primary font-semibold">hugobauz@gmail.com</span>
        </p>
        {/* <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          inputStyle={{
            height: "48px",
            width: "48px",
            border: "1px solid #BDBDBD",
            backgroundColor: "transparent",
            borderRadius: "5px",
            margin: "10px",
          }}
        /> */}
        <ReactCodeInput
          type="text"
          name={""}
          inputMode={"tel"}
          fields={6}
          autoFocus={true}
          // onChange={handleChange}
          inputStyle={{
            height: "48px",
            width: "48px",
            border: "1px solid #BDBDBD",
            backgroundColor: "transparent",
            borderRadius: "5px",
            margin: "7px",
            textAlign: "center",
          }}
        />
        <p className="text-gray-600 py-6">
          Resend code in{" "}
          <span className="text-tertiary font-semibold">00:25</span>
        </p>
        <Button full={true}>resend code</Button>
        <p className="text-base text-gray-600 pt-2">
          Didn't get code?{" "}
          <Link to="/verify/number">
            <span className="text-primary font-semibold">use phone number</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;

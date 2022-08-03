// import { useState } from "react";
import localforage from "localforage";
import { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { useCountdown } from "../../../hooks";
import { useCreateVendor, useResendVerifyOtp } from "../../../hooks/mutations";


const EmailVerification = () => {
  const {
    minutesLeft,
    secondsLeft,
    start: startOtpCountdown,
    reset,
    isOver,
    
  } = useCountdown({ minutes: 5 });
  const navigate=useNavigate()

  useEffect(() => {
    startOtpCountdown();
  }, [startOtpCountdown]);
  const resendOtp = useResendVerifyOtp();
  const createVendor = useCreateVendor();
 
  const [otp, setOtp] = useState<string>("");

  const handleChange = (otpInput: string) => {
    setOtp(otpInput);
  };
  const onSubmit = () => {
    localforage.setItem("forgotPasswordOtp", otp);
   navigate('/forgot-password/step-3')
  };

/*   const onResendOtp = () => {
    resendOtp.mutate();
  }; */
  useEffect(() => {
    if (resendOtp.isSuccess) {
      reset();
      startOtpCountdown();
    }
  }, [resendOtp.isSuccess, reset, startOtpCountdown]);

 
  return (
    <div className="w-[680px] py-10 bg-white   rounded-lg shadow-lg text-center ">
      <div className=" space-y-3 w-[400px] mx-auto">
        <h1 className=" uppercase text-lg font-bold ">email verification</h1>
        <p className="text-base text-gray-600 pb-6">
          Enter the 6 digit verification code sent to <br />
          your email address
        </p>

        <ReactCodeInput
          type="text"
          name={""}
          inputMode={"tel"}
          fields={6}
          value={otp}
          autoFocus={true}
          onChange={handleChange}
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
        {!isOver ? (
          <p className="text-gray-600 py-6">
            Resend code in{" "}
            <span className="text-tertiary font-semibold">
              {minutesLeft}:{secondsLeft}
            </span>
          </p>
        ) : (
          <p className="text-gray-600 py-6">you can now resend otp</p>
        )}
        <div className="flex items-center gap-5">
          <Button
            full={true}
            disabled={!isOver}
          //  onClick={onResendOtp}
            loading={resendOtp.isLoading}
          >
            resend code
          </Button>
          <Button
            full={true}
            disabled={otp.length < 6 || isOver}
            onClick={onSubmit}
            loading={createVendor.isLoading}
          >
            send otp
          </Button>
        </div>

        <p className="text-base text-gray-600 pt-2">
          Didn't get code?{" "}
          <Link to="/verify/number">
            <span className="text-primary    font-semibold">
              use phone number
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;

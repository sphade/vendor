// import { useState } from "react";
import localforage from "localforage";
import { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useSelector } from "react-redux";
// import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button, Loading } from "../../../components";
import { useCountdown } from "../../../hooks";
import { useCreateVendor, useResendVerifyOtp } from "../../../hooks/mutations";
import { RootState } from "../../../redux/store";

const EmailVerification = () => {
  const {
    minutesLeft,
    secondsLeft,
    start: startOtpCountdown,
    reset,
    isOver,
    
  } = useCountdown({ minutes: 5 });
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    localforage.getItem("signUpInfo", (err, value) => {
      setUserInfo(value);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    startOtpCountdown();
  }, [startOtpCountdown]);
  const resendOtp = useResendVerifyOtp();
  const createVendor = useCreateVendor();
  /**
   * email verification page
   */
  const [otp, setOtp] = useState<string>("");

  const handleChange = (otpInput: string) => {
    setOtp(otpInput);
  };
  const onSubmit = () => {
    
    createVendor.mutate({
      email: userInfo?.email,
      password: userInfo?.password,
      name: userInfo?.businessName,
      phone: `+${userInfo?.phone}`,
      otp: otp,
      address: userInfo?.businessAddress,
      logo:userInfo?.images[0]?.file
    });
    localforage.removeItem("signUpInfo");
  };
  const singUpInfo = useSelector(
    (state: RootState) => state.signUpInfo.signUpInfo
  );
  const onResendOtp = () => {
    resendOtp.mutate({
      email: userInfo?.email,
      phone: `+${userInfo?.phone}`,
    });
  };
  useEffect(() => {
    if (resendOtp.isSuccess) {
      reset();
      startOtpCountdown();
    }
  }, [resendOtp.isSuccess, reset, startOtpCountdown]);

  if (loading) {
    return (
      <div className="w-[680px] h-[430px] py-10 bg-white   rounded-lg shadow-lg text-center ">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-[680px] py-10 bg-white   rounded-lg shadow-lg text-center ">
      <div className=" space-y-3 w-[400px] mx-auto">
        <h1 className=" uppercase text-lg font-bold ">email verification</h1>
        <p className="text-base text-gray-600 pb-6">
          Enter the 6 digit verification code sent to: <br />
          <span className="text-primary font-semibold">
            {singUpInfo?.email || userInfo?.email}
          </span>
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
            onClick={onResendOtp}
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

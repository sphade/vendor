import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import localforage from "localforage";
import { FC, useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTimeout } from "timers/promises";
import { useCountdown } from "../../hooks";
import { useChangeEmail, useEmailOtp } from "../../hooks/mutations";
import { useUser } from "../../hooks/queries";
import {
  setEmailVerificationModal,
  toggleEmailVerificationModal,
} from "../../redux/slices/ModalSlice";
import { RootState } from "../../redux/store";
import { emailValidation } from "../../validation/emailValidation";

import Button from "../Button";
import { IModal } from "./interface";

export const EmailModal: FC<IModal> = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  function closeModal() {
    setModalState(false);
  }
  const emailOtp = useEmailOtp();
  const {
    register,
    handleSubmit,
    // control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    emailOtp.mutate(data);
    localforage.setItem("newEmail", data.email);
  };
  if (emailOtp.isSuccess) {
    closeModal();
    dispatch(setEmailVerificationModal());
  }
  return (
    <Modal open={modalState} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] h-[310px]"
      >
        <h1 className="capitalize text-tertiary font-semibold">
          enter your email address
        </h1>
        <TextField
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailValidation,
              message: "invalid email format",
            },
          })}
          fullWidth
          error={errors.email}
          helperText={errors?.email && errors?.email?.message}
          label="Email Address"
          type="email"
          autoComplete="email"
        />
        <Button full loading={emailOtp.isLoading}>
          continue
        </Button>
      </form>
    </Modal>
  );
};

export const EmailVerificationModal: FC<IModal> = () => {
  const changeEmail = useChangeEmail();
  const {
    minutesLeft,
    secondsLeft,
    start: startOtpCountdown,
    reset,
    isOver,
    isRunning,
  } = useCountdown({ minutes: 5 });
  const emailOtp = useEmailOtp();

  const dispatch = useDispatch();
  function closeModal() {
    dispatch(toggleEmailVerificationModal());
  }
  const state = useSelector(
    (state: RootState) => state.modal.emailVerificationModal
  );
  const [email, setEmail] = useState<any>("");

  useEffect(() => {
    localforage.getItem("newEmail", (err, value) => {
      setEmail(value);
    });
  }, [email]);

  const [otp, setOtp] = useState("");
  const handleChange = (otpInput: string) => {
    setOtp(otpInput);
  };
  const onSubmit = () => {
    changeEmail.mutate({
      email: email,
      otp: otp,
    });
  };
  useEffect(() => {
    state === true ? startOtpCountdown() : reset();
  }, [state]);
  return (
    <Modal open={state} onClose={closeModal}>
      <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px]  ">
        <div className=" space-y-3 w-[400px] mx-auto">
          <h1 className=" uppercase text-lg font-bold ">email verification</h1>
          <p className="text-base text-gray-600 pb-6">
            Enter the 6 digit verification code sent to: <br />
            <span className="text-primary font-semibold">{email}</span>
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
              onClick={() => {
                emailOtp.mutate({ email: email });
              }}
              loading={emailOtp.isLoading}
            >
              resend code
            </Button>
            <Button
              full={true}
              disabled={otp.length < 6 || isOver}
              onClick={onSubmit}
              loading={changeEmail.isLoading}
            >
              send otp
            </Button>
          </div>

          {/* <p className="text-base text-gray-600 pt-2">
            Didn't get code?{" "}
            <Link to="/verify/number">
              <span className="text-primary    font-semibold">
                use phone number
              </span>
            </Link>
          </p> */}
        </div>
      </div>
    </Modal>
  );
};

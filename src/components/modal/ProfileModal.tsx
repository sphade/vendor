/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC, useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useCountdown } from "../../hooks";
import {
  useChangeEmail,
  useChangeNumber,
  useChangePassword,
  useChangeProfilePicture,
  useEmailOtp,
  useRequestNumberOtp,
} from "../../hooks/mutations";
import ImageUploading from "react-images-uploading";

import PhoneInput from "react-phone-input-2";


import { emailValidation } from "../../validation/emailValidation";

import Button from "../Button";
import { IModal } from "./interface";
import PasswordInput from "../PasswordInput";

export const EmailModal: FC<IModal> = ({ modalState, setModalState }) => {
  const changeEmail = useChangeEmail();
  const {
    minutesLeft,
    secondsLeft,
    start: startOtpCountdown,
    reset,
    isOver,
  } = useCountdown({ minutes: 5 });
  const emailOtp = useEmailOtp();

  const [email, setEmail] = useState<any>("");

  const [otp, setOtp] = useState("");
  const handleChange = (otpInput: string) => {
    setOtp(otpInput);
  };
  const onSubmitOtp = () => {
    changeEmail.mutate({
      email: email,
      otp: otp,
    });
  };
  useEffect(() => {
    emailOtp.isSuccess === true ? startOtpCountdown() : reset();
  }, [emailOtp.isSuccess]);
  useEffect(() => {
    changeEmail.isSuccess && setModalState(false);
  }, [changeEmail.isSuccess]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function closeModal() {
    setModalState(false);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    emailOtp.mutate(data);
    setEmail(data.email);
  };

  return (
    <Modal open={modalState} onClose={closeModal} closeAfterTransition>
      {emailOtp.isSuccess ? (
        <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px]  ">
          <div className=" space-y-3 w-[400px] mx-auto">
            <h1 className=" uppercase text-lg font-bold ">
              email verification
            </h1>
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
                  reset();
                  startOtpCountdown();
                }}
                loading={emailOtp.isLoading}
              >
                resend code
              </Button>
              <Button
                full={true}
                disabled={otp.length < 6 || isOver}
                onClick={onSubmitOtp}
                loading={changeEmail.isLoading}
              >
                send otp
              </Button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </Modal>
  );
};

export const PhoneNumberModal: FC<IModal> = ({ modalState, setModalState }) => {
  const dispatch = useDispatch();
  const numberOtp = useRequestNumberOtp();
  const [number, setNumber] = useState<any>("");

  const {
    minutesLeft,
    secondsLeft,
    start: startOtpCountdown,
    reset,
    isOver,
  } = useCountdown({ minutes: 5 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function closeModal() {
    setModalState(false);
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    numberOtp.mutate({ phone: `+${data.phone}` });
    setNumber(data.phone);
  };

  const changeNumber = useChangeNumber();

  const [otp, setOtp] = useState("");
  const handleChange = (otpInput: string) => {
    setOtp(otpInput);
  };
  const onSubmitOtp = () => {
    changeNumber.mutate({
      phone: `+${number}`,
      otp: otp,
    });
  };
  useEffect(() => {
    numberOtp.isSuccess === true ? startOtpCountdown() : reset();
  }, [numberOtp.isSuccess]);
  useEffect(() => {
    changeNumber.isSuccess && closeModal();
  }, [changeNumber.isSuccess]);
  return (
    <Modal open={modalState} onClose={closeModal}>
      {numberOtp.isSuccess ? (
        <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px]  ">
          <div className=" space-y-3 w-[400px] mx-auto">
            <h1 className=" uppercase text-lg font-bold ">
              phone number verification
            </h1>
            <p className="text-base text-gray-600 pb-6">
              Enter the 6 digit verification code sent to: <br />
              <span className="text-primary font-semibold">{`+${number}`}</span>
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
                  numberOtp.mutate({ phone: `+${number}` });
                  reset();
                  startOtpCountdown();
                }}
                loading={numberOtp.isLoading}
              >
                resend code
              </Button>
              <Button
                full={true}
                disabled={otp.length < 6 || isOver}
                onClick={onSubmitOtp}
                loading={changeNumber.isLoading}
              >
                send otp
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] h-[310px]"
        >
          <h1 className="capitalize text-tertiary font-semibold">
            enter your phone number
          </h1>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "this field is required",
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"ng"}
                placeholder="phone number"
                enableSearch={true}
                containerClass="!w-full "
                inputClass="!w-full "
                inputProps={{
                  name: "number",
                  required: true,
                }}
                isValid={() => {
                  if (errors.phone) {
                    return errors.phone.message;
                  } else {
                    return true;
                  }
                }}
              />
            )}
          />

          <Button full loading={numberOtp.isLoading}>
            continue
          </Button>
        </form>
      )}
    </Modal>
  );
};

export const PasswordModal: FC<IModal> = ({ modalState, setModalState }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changePassword = useChangePassword();
  function closeModal() {
    setModalState(false);
  }

  const { handleSubmit, control, watch } = useForm();
  const onSubmit = (data: any) => {
    changePassword.mutate({
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword,
    });
  };

  return (
    <Modal open={modalState} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] min-h-[310px]"
      >
        <h1 className="capitalize text-tertiary font-semibold">
          change your password
        </h1>
        <PasswordInput
          rules={{
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password must be more than 8 characters",
            },
          }}
          control={control}
          name={"oldPassword"}
          label="old password"
        />
        <PasswordInput
          rules={{
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password must be more than 8 characters",
            },
          }}
          control={control}
          name={"newPassword"}
          label="new password"
        />
        <PasswordInput
          rules={{
            required: "this field is required",
            validate: (val: string) => {
              if (watch("newPassword") !== val) {
                return "your password does not match";
              }
            },
          }}
          control={control}
          name={"confirmPassword"}
          label="confirm new password"
        />
        <Button full loading={changePassword.isLoading}>
          save
        </Button>
      </form>
    </Modal>
  );
};

export const AvatarModal = ({ modalState, setModalState, currentPic }: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function closeModal() {
    setModalState(false);
  }
  const changeImage = useChangeProfilePicture();

  useEffect(() => {
    changeImage.isSuccess && closeModal();
  }, [changeImage.isSuccess]);
  const [images, setImages] = useState<any[]>([]);
  const formData = new FormData();
  const onImageChange = async (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };
  return (
    <Modal open={modalState} onClose={closeModal}>
      <ImageUploading
        value={images}
        onChange={onImageChange}
        maxNumber={1}
        dataURLKey="image"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[52%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] min-h-[310px]">
            <h1 className="capitalize text-tertiary font-semibold">
              change Avatar
            </h1>
            <Avatar
              className="mx-auto !w-[200px] !h-[200px] "
              src={(imageList && imageList[0]?.image) || currentPic}
            />
            <div className="flex items-center gap-3">
              <Button
                full
                variant="tertiary"
                onClick={() => {
                  onImageUpdate(0);
                }}
              >
                change
              </Button>
              <Button
                full
                disabled={imageList.length < 1}
                onClick={() => {
                  formData.append("image", images[0]?.file);
                  changeImage.mutate(formData);
                }}
                loading={changeImage.isLoading}
              >
                save
              </Button>
            </div>
          </div>
        )}
      </ImageUploading>
    </Modal>
  );
};

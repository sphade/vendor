import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { ChangePictureIcon } from "../assets/images/icons";
import {
  Button,
  EmailModal,
  BackButton,
  PasswordInput,
  Loading,
} from "../components";
import { useUpdateBusinessInfo } from "../hooks/mutations";
import { useUser } from "../hooks/queries";
import { useForm } from "react-hook-form";
import {
  AvatarModal,
  PasswordModal,
  PhoneNumberModal,
} from "../components/modal/ProfileModal";

const Profile = () => {
  const user = useUser();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      password: "************",
    },
  });

  const changeBusinessInfo = useUpdateBusinessInfo();

  const [edit, setEdit] = React.useState(false);
  const [emailModalState, setEmailModalState] = React.useState(false);
  const [numberModalState, setNumberModalState] = React.useState(false);
  const [passwordModalState, setPasswordModalState] = React.useState(false);
  const [avatarModalState, setAvatarModalState] = React.useState(false);

  if (user?.isLoading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }

  if (user?.isError) {
    return (
      <div className="w-full h-screen center-element">
        <h1>{user.error.message} </h1>
        <button
          className="p-1 border-primary hover:border-black border ml-2 rounded hover:text-primary hover:bg-black default-transition"
          onClick={() => {
            user.refetch();
          }}
        >
          try again
        </button>
      </div>
    );
  }
  const submit = (data: any) => {
    delete data?.password;

    changeBusinessInfo.mutate(data);
  };
  return (
    <div className="flex gap-5 mx-auto items-start  w-fit py-20 relative  ">
      <BackButton />
      <div className="border">
        <EmailModal
          modalState={emailModalState}
          setModalState={setEmailModalState}
        />
        <PhoneNumberModal
          modalState={numberModalState}
          setModalState={setNumberModalState}
        />

        <PasswordModal
          modalState={passwordModalState}
          setModalState={setPasswordModalState}
        />
        <AvatarModal
          modalState={avatarModalState}
          setModalState={setAvatarModalState}
          currentPic={user?.data.logo}
        />
        <div className="w-[684px]  text-center shadow-lg border bg-secondary rounded-lg ">
          <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
            edit profile
          </h1>

          <>
            <div className="relative mb-5  ">
              <div className="relative w-fit mx-auto ">
                <Avatar
                  src={ user?.data.logo}
                  alt="avatarIcon"
                  className="!h-32 !w-32 mx-auto !relative"
                  sx={{
                    h: "128px",
                  }}
                />
                {edit && (
                  <ChangePictureIcon
                    className=" cursor-pointer absolute right-[13px] bottom-[0px] "
                    onClick={() => {
                      setAvatarModalState(true);
                    }}
                  />
                )}
              </div>
            </div>

            <form className="space-y-5 w-[390px] mx-auto mb-10">
              <TextField
                fullWidth
                aria-readonly
                label="Business Name"
                type={"text"}
                defaultValue={user?.data.business_name}
                InputProps={{
                  readOnly: !edit,
                }}
                {...register("name", {
                  required: "this field is required",
                })}
                error={errors?.name}
                helperText={errors?.name && errors?.name?.message}
              />
              <TextField
                fullWidth
                label="Email Address"
                value={user?.data.email}
                type={"email"}
                InputProps={{
                  readOnly: true,
                }}
              />
              <PhoneInput
                country={"ng"}
                placeholder="phone Number"
                enableSearch={true}
                containerClass="!w-full"
                inputClass="!w-full !cursor-text"
                value={user?.data.phone}
                disabled
              />
              <TextField
                fullWidth
                defaultValue={user?.data?.business_address}
                type="text"
                InputProps={{
                  readOnly: !edit,
                }}
                label="Business Address"
                {...register("address", {
                  required: "this field is required",
                })}
                error={errors.address}
                helperText={errors?.address && errors?.address?.message}
              />{" "}
              <PasswordInput
                rules={{
                  required: "this field is required",
                  minLength: {
                    value: 8,
                    message: "password must be more than 8 characters",
                  },
                }}
                control={control}
                name={"password"}
                label="password"
                disabled
              />
              {!edit ? (
                <Button
                  full
                  onClick={(e: any) => {
                    e.preventDefault();
                    setEdit(true);
                  }}
                >
                  edit profile
                </Button>
              ) : (
                <Button
                  full
                  loading={changeBusinessInfo.isLoading}
                  onClick={handleSubmit(submit)}
                >
                  save
                </Button>
              )}
            </form>
          </>

          {edit ? (
            <>
              <p
                onClick={() => setEmailModalState(true)}
                className="absolute top-[430px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze "
              >
                change
              </p>
              <p
                onClick={() => setNumberModalState(true)}
                className="absolute top-[510px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze "
              >
                change
              </p>
              <p
                onClick={() => setPasswordModalState(true)}
                className="absolute top-[670px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze "
              >
                change
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;

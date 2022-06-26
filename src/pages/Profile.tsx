import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import localforage from "localforage";
import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import avatarIcon from "../assets/images/icons/avatar.png";
import {
  Button,
  EmailModal,
  EmailVerificationModal,
  BackButton,
  PasswordInput,
  Loading,
} from "../components";

const Profile = () => {
  const [edit, setEdit] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [emailModalState, setEmailModalState] = React.useState(false);
  const [emailVerificationModalState, setEmailVerificationModalState] =
    React.useState(false);
  const [user, setUser] = React.useState<any>();
  useEffect(() => {
    localforage.getItem("user", (err, val) => {
      setUser(val)
    setLoading(false)
    });
    
  }, [])
  if (loading) {
    return (
      <div className='w-full h-screen'>
        <Loading/>

      </div>
    )
  }
  return (
    <div className="flex gap-5 mx-auto items-start  w-fit py-20 relative  ">
      <BackButton />
      <div className="border">
        <EmailModal
          modalState={emailModalState}
          setModalState={setEmailModalState}
        />
        <EmailVerificationModal
          modalState={emailVerificationModalState}
          setModalState={setEmailVerificationModalState}
        />
        <div className="w-[684px]  text-center shadow-lg border bg-secondary rounded-lg ">
          <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
            edit profile
          </h1>
          {/* <img src={avatarIcon} alt={avatarIcon} className="h-32 mb-10 mx-auto" /> */}
          <Avatar
            src={user?.photo}
            alt="avatarIcon"
            className="!h-32 !w-32 mb-10 mx-auto"
            sx={{
              h: "128px",
            }}
          />

          <form
            className="space-y-5 w-[390px] mx-auto mb-10"
            onSubmit={(e: any) => {
              e.preventDefault();
            }}
          >
            <TextField
              fullWidth
              aria-readonly
              label="Business Name"
             
              type={"text"}
              
              value={user?.name}
              InputProps={{
                readOnly: !edit,
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              value={user?.email}
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
              value={user?.phone}
              disabled
            />
            <TextField
              fullWidth
              value="21 loubani street lekki lagos"
              InputProps={{
                readOnly: !edit,
              }}
              label="Business Address"
            />{" "}
            <TextField
              fullWidth
              value="21 loubani street lekki lagos"
              InputProps={{
                readOnly: !edit,
              }}
              label="Business Address"
            />
            {/* <PasswordInput placeholder="password" /> */}
            {!edit ? (
              <Button full onClick={() => setEdit(true)}>
                edit profile
              </Button>
            ) : (
              <Button full onClick={() => setEdit(false)}>
                save
              </Button>
            )}
          </form>
          {edit ? (
            <>
              <p
                onClick={() => setEmailModalState(true)}
                className="absolute top-[450px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze "
              >
                change
              </p>
              <p className="absolute top-[530px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze ">
                change
              </p>
              <p className="absolute top-[690px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze ">
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

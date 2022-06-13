import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import PhoneInput from "react-phone-input-2";
import avatarIcon from "../assets/images/icons/avatar.png";
import {
  Button,
  EmailModal,
  EmailVerificationModal,
  BackButton,
} from "../components";

const Profile = () => {
  const [emailModalState, setEmailModalState] = React.useState(false);
  const [emailVerificationModalState, setEmailVerificationModalState] =
    React.useState(false);

  return (
    <div className='flex gap-5 mx-auto items-start  w-fit py-20  '>
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
            src={avatarIcon}
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
              setEmailModalState(true);
            }}
          >
            <TextField
              fullWidth
              aria-readonly
              label="Business Name"
              type={"text"}
              value="lawal lawal alwal alwal alwal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
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
              inputClass="!w-full "
              value="12344222"
              disabled
            />
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              label="Business Address"
              type={"email"}
            />
            {/* <PasswordInput placeholder="password"  /> */}
            <Button full>edit profile</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import TextField from "@mui/material/TextField";
import React from "react";
import PhoneInput from "react-phone-input-2";
import avatarIcon from "../assets/images/icons/avatar.png";
import { Button, PasswordInput } from "../components";
import ProfileModal from "../components/profile/ProfileModal.jsx";

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <div className="border">
      <ProfileModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <div className="w-[684px] mx-auto text-center shadow-lg border bg-secondary rounded-lg my-10">
        <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
          edit profile
        </h1>
        <img src={avatarIcon} alt={avatarIcon} className="h-32 mb-10 mx-auto" />
        <form
          className="space-y-5 w-[390px] mx-auto mb-10"
          onSubmit={(e: any) => {
            e.preventDefault();
            setModalIsOpen(true);
          }}
        >
          <TextField
            fullWidth
            disabled
            label="Business Name"
            type={"text"}
            value="lawal lawal alwal alwal alwal"
          />
          <TextField fullWidth label="Email Address" type={"email"} />
          <PhoneInput
            country={"ng"}
            placeholder="phone Number"
            enableSearch={true}
            containerClass="w-full "
            inputClass="w-full "
            disabled
            value="lawal alwal alwal"
          />
          <TextField fullWidth label="Business Address" type={"email"} />
          <PasswordInput placeholder="password" />
          <Button full>edit profile</Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

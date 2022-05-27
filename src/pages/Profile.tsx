import { TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import avatarIcon from "../assets/images/icons/avatar.png";
import { Button, PasswordInput } from "../components";

const Profile = () => {
  return (
    <div className="w-[684px]">
      <h1>edit profile</h1>
      <img src={avatarIcon} alt="" />
      <form>
        <TextField />
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
  );
};

export default Profile;

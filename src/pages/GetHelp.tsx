import { ArrowBackIcon } from "../assets/images/icons";
import TextField from "@mui/material/TextField";
import { BackButton, Button } from "../components";
import { TextareaAutosize } from "@mui/material";

const GetHelp = () => {
  return (
    <div className="flex gap-5 mx-auto items-start border border-primary w-fit py-20 ">
      <BackButton />

      <div className="w-[520px]  text-center shadow-lg border border-[#BDBDBD] px-[75px] bg-secondary rounded-lg ">
        <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
          get help
        </h1>

        <div className="flex items-center mb-10 gap-5">
          <img src={ArrowBackIcon} alt={ArrowBackIcon} />
          <p className="text-gray-500 font-semibold">
            Email:{" "}
            <span className=" text-tertiary">
              bossbuspremiumworld@gmail.com
            </span>
          </p>
        </div>

        <div className="flex items-center mb-8 gap-5">
          <img src={ArrowBackIcon} alt={ArrowBackIcon} />
          <p className="text-gray-500 font-semibold">
            Email:{"   "}
            <span className=" text-tertiary">
              bossbuspremiumworld@gmail.com
            </span>
          </p>
        </div>
        <hr className="border-[#BDBDBD]" />
        <div>
          <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
            message
          </h1>
          <form className="mb-20">
            <TextField fullWidth label="subject" />
            <TextareaAutosize maxLength={50} />

            <Button full>send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;

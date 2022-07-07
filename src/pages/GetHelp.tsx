import { EmailIcon, PhoneIcon } from "../assets/images/icons";
import TextField from "@mui/material/TextField";
import { BackButton, Button } from "../components";
import { useFilePicker } from "use-file-picker";
const GetHelp = () => {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "BinaryString",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 50,
    // imageSizeRestrictions: {
    //   maxHeight: 900, 
    //   maxWidth: 1600,
    //   minHeight: 600,
    //   minWidth: 768,
    // },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    console.log(errors);
    return <div>Error...</div>;
  }

  return (
    <div>
      <button onClick={() => openFileSelector()}>Select files </button>
      <br />
      {filesContent.map((file, index) => (
        <div key={index}>
          <h2>{file.name}</h2>
          <img alt={file.content} src={file.content}></img>
          <br />
        </div>
      ))}
    </div>
  );
  // return (
  //   <div className="flex gap-5 mx-auto items-start  w-fit py-20 ">
  //     <BackButton />

  //     <div className="w-[520px]  border border-[#BDBDBD] px-[75px] bg-secondary rounded-lg ">
  //       <h1 className="text-2xl text-tertiary  text-center font-semibold capitalize my-10">
  //         get help
  //       </h1>

  //       <div className="flex items-center mb-10 gap-3">
  //         <img src={EmailIcon} alt="ArrowBackIcon" />
  //         <p className="text-gray-500 font-semibold">
  //           Email:
  //           <span className=" text-tertiary">
  //             bossbuspremiumworld@gmail.com
  //           </span>
  //         </p>
  //       </div>

  //       <div className="flex items-center mb-8 gap-5">
  //         <img src={PhoneIcon} alt="PhoneIcon" />
  //         <p className="text-gray-500 font-semibold">
  //           mobile:
  //           <span className=" text-tertiary">+234 81 000 34511</span>
  //         </p>
  //       </div>
  //       <hr className="border-[#BDBDBD]" />
  //       <div>
  //         <h1 className="text-2xl text-tertiary  font-semibold capitalize my-5">
  //           message
  //         </h1>
  //         <form className="mb-20 space-y-5">
  //           <TextField fullWidth label="subject" />
  //           <TextField fullWidth multiline rows={5} />

  //           <Button full>send</Button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>

  // );
};

export default GetHelp;

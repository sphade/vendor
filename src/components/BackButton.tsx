import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../assets/images/icons";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <img
      src={ArrowLeftIcon}
      alt="b"
      className="cursor-pointer border-primary border rounded-full h-10 w-10  "
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default BackButton;

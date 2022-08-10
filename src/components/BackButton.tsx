import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../assets/images/icons";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ArrowLeftIcon
      
      className="cursor-pointer   "
      
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default BackButton;

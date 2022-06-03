import { ArrowLeftIcon } from "../assets/images/icons";

const BackButton = () => {
  return (
    <img
      src={ArrowLeftIcon}
      alt={ArrowLeftIcon}
      className="cursor-pointer border-primary border rounded-full h-10 w-10  "
    />
  );
};

export default BackButton;

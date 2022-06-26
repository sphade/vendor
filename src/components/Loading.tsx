import { LoadingLogoIcon } from "../assets/images/icons";

const Loading = () => {
  return (
    <div className="w-full h-full center-element relative">
      <img src={LoadingLogoIcon} className="z-50 h-14 w-14 " alt="loading..." />

      <div className="w-14 h-14 bg-primary rounded-full absolute animate-ping opacity-75 "></div>
    </div>
  );
};

export default Loading;

const TotalCard = ({
  text,
  Logo,
  num,
  color,
}: {
  text: string;
  Logo: any;
  num: any;
  color: string;
}) => {
  return (
    <div
      style={{
        background: color,
      }}
      className={`h-[200px] p-5 flex flex-col justify-between rounded-lg  `}
    >
      <div className=" flex items-center justify-between">
        <p className="text-tertiary    font-semibold text-base ">{text}</p>
        <Logo/>
      </div>
      <p className="font-bold    text-2xl">{num || "0"}</p>
    </div>
  );
};

export default TotalCard;

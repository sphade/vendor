const ScreenNotSupported = () => {
  return (
    <div className="center-element pt-[100px]  bg-[#E5E5E5] px-2 h-screen w-screen lg:hidden h-screen">
      <div className="shadow-xl space-y-5 text-primary  center-element flex-col text-center rounded-lg bg-secondary w-[400px] md:w-[600px] min-h-[250px] md:min-h-[350px] px-10 md:px-20 ">
        <h1 className="py-5 border-b border-primary font-bold text-lg md:text-xl uppercase">
          this dashboard currently doesn't support mobile devices
        </h1>
        <p className="capitalize text-tertiary text-sm">
          for best experience, we recommend you access the dashboard with{" "}
          <strong>
            Google chrome, mozilla firefox or any other suitable browser
          </strong>{" "}
          on a desktop or tablet device!
        </p>
      </div>
    </div>
  );
};

export default ScreenNotSupported;

import classNames from "classnames";

const InteriorInput = ({ placeholder, register, name, rule, errors }) => {
  return (
    <div className="flex w-full items-center gap-5 h-[50px]">
      <div className="bg-gray-300 p-3 px-7  h-full rounded-lg">Meter</div>
      {/* <div className="border-2 px-2 flex-1 h-full rounded-lg flex items-center border-[#828282]">
        <p className="pr-2 border-r border-[#BDBDBD] text-gray-700  text-lg">
          cabin length
        </p>
        <input
          type="text"
          className="flex-1 pl-2 outline-none bg-transparent w-full"
        />
      </div> */}
      <div
        className={classNames(
          "text-[#828282]  border rounded focus-within:hover:border-blue-500 focus-within:ring-1  focus-within:border-blue-500 focus:border-blue-500  py-1 h-[50px] w-full items-center hover:border-tertiary default-transition relative flex   border-gray-400",
          {
            " border border-red-700 hover:!border-red-700 focus-within:ring-1 ring-red-700 focus-within:border-red-700  focus:border-red-700 !text-red-700":
              errors,
          }
        )}
      >
        <div className="px-3  border-r border-[#828282] ">
          <h1 className="text-lg">{placeholder}</h1>
        </div>
        <input
          {...register(name, rule)}
          type="text"
          // defaultValue={0}
          className=" text-tertiary flex-1 px-3 text-lg outline-none bg-transparent w-full"
        />
        <p className="text-red-700 font-normal absolute -bottom-5 text-xs">
          {errors && errors.message}
        </p>
      </div>
    </div>
  );
};

export default InteriorInput;

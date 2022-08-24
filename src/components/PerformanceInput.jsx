import classNames from "classnames";


const PerformanceInput = ({
  label,
  placeholder,
  register,
  name,
  rule,
  errors,
  defaultValue
}) =>
  
  {
    return (
      <div
        className={classNames(
          "text-[#828282] font-[500]   border rounded focus-within:text-blue-500 focus-within:hover:border-blue-500 focus-within:ring-1  focus-within:border-blue-500 focus:border-blue-500  py-1 h-[50px] w-full items-center hover:border-tertiary default-transition relative flex   border-[#cac8c8]",
          {
            " border border-red-700 hover:!border-red-700 focus-within:ring-1 ring-red-700 focus-within:border-red-700  focus:border-red-700 !text-red-700":
              errors,
          }
        )}
      >
        <span className="capitalize absolute  -top-3 px-2 bg-white left-4 text-sm">
          {label}
        </span>
        <div className="px-3  border-r border-[#828282] ">
          <h1 className="text-lg">{placeholder}</h1>
        </div>
        <input
          {...register(name, rule)}
          type="number"
          min={1}
          defaultValue={defaultValue}
          className=" text-tertiary flex-1 px-3 text-lg outline-none bg-transparent w-full"
        />
        <p className="text-red-700 font-normal absolute -bottom-5 text-xs">
          {errors && errors.message}
        </p>
      </div>
    );
  };

export default PerformanceInput;

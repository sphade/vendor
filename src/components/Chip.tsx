import classnames from "classnames";
const Chip = ({
  variant = "success",
  children,
}: {
  variant?: "success" | "warning";
  children: string;
}) => {
  return (
    <div
      className={classnames(
        "rounded-xl   center-element w-fit px-2 py-1      capitalize text-base font-semibold",
        {
          "text-blue-600 bg-blue-100": variant === "success",
          "text-red-600 bg-red-100": variant === "warning",
        }
      )}
    >
      {children}
    </div>
  );
};
export default Chip;



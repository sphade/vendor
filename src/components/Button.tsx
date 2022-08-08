import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import { FC } from "react";


interface IButton {
  children: any;
  loading?: Boolean;
  IconLeft?: string | any;
  IconRight?: string | any;
  variant?: "primary" | "outlinePrimary" | "tertiary" | "outlineTertiary";
  full?: Boolean;
  disabled?: boolean;

  size?: "medium" | "small" | "big";
  onClick?: (e?:any) => void;
}
const Button: FC<IButton> = ({
  children,
  loading,
  IconLeft,
  IconRight,
  full,
  variant = "primary",
  disabled,

  size = "big",
  onClick,
}) => {
  return (
    
      <button
        className={classNames(
          "hover:opacity-80 default-transition   center-element     uppercase  text-secondary rounded-md cursor-pointer  h-[50px] disabled:opacity-50 disabled:cursor-not-allowed",
          {
            " opacity-75": loading,
            "cursor-not-allowed !bg-[#d2d2d2]": disabled,
            "w-full": full,
            "text-base py-3 px-5 font-semibold": size === "big",
            "text-sm py-2 px-4 h-[40px] font-bold": size === "medium",
            "text-xs py-1.5 px-3.5 font-bold": size === "small",
            "border  border-primary text-primary bg-secondary":
              variant === "outlinePrimary",
            "border  border-tertiary text-tertiary bg-secondary":
              variant === "outlineTertiary",
            "bg-tertiary": variant === "tertiary",
            "bg-primary": variant === "primary",
          }
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {IconLeft && <IconLeft className="pr-3 h-9 w-9" />}
        <span>
          {loading ? (
            <CircularProgress
              size={22}
              sx={{
                color: "white",
              }}
            />
          ) : (
            children
          )}
        </span>
        {IconRight && <IconRight className="pl-3 h-5 w-5" />}
      </button>
   
  );
};

export default Button;

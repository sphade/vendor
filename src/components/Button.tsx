import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import { FC } from "react";
import ButtonBase from "@mui/material/ButtonBase";

interface IButton {
  children: any;
  loading?: Boolean;
  iconLeft?: string | any;
  iconRight?: string | any;
  variant?: "primary" | "outlinePrimary" | "tertiary" | "outlineTertiary";
  full?: Boolean;
  disabled?: boolean;

  size?: "medium" | "small" | "big";
  onClick?: () => void;
}
const Button: FC<IButton> = ({
  children,
  loading,
  iconLeft,
  iconRight,
  full,
  variant = "primary",
  disabled,

  size = "big",
  onClick,
}) => {
  return (
    <ButtonBase
      sx={{
        width: "100%",
      }}
    >
      <button
        className={classNames(
          "hover:opacity-80 default-transition   center-element font-hindBold  uppercase  text-secondary rounded-md cursor-pointer  h-fit disabled:opacity-50 disabled:cursor-not-allowed",
          {
            " opacity-75": loading,
            "cursor-not-allowed !bg-[#d2d2d2]": disabled,
            "w-full": full,
            "text-base py-3 px-5 font-semibold": size === "big",
            "text-sm py-2 px-4 font-bold": size === "medium",
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
        {iconLeft && <img src={iconLeft} alt="icon" className="pr-3" />}
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
        {iconRight && <img src={iconRight} alt="icon" className="pl-3" />}
      </button>
    </ButtonBase>
  );
};

export default Button;

import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
interface IButton {
  children: string;
  loading?: Boolean;
  iconLeft?: string | any;
  iconRight?: string | any;
  variant?: "primary" | "outlinePrimary" | "tertiary" | "outlineTertiary";
  full?: Boolean;
  disabled?: boolean;
  Link?: string;
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
  Link,
  size = "big",
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "hover:scale-105 default-transition center-element  uppercase  text-secondary rounded-md cursor-pointer  h-fit disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "w-full": full,
          "text-base py-3 px-5 font-semibold": size === "big",
          "text-sm py-2 px-4 font-bold": size === "medium",
          "text-xs py-1.5 px-3.5 font-bold": size === "small",
          "border-2  border-primary text-primary bg-secondary":
            variant === "outlinePrimary",
          "border-2  border-tertiary text-tertiary bg-secondary":
            variant === "outlineTertiary",
          "bg-tertiary": variant === "tertiary",
          "bg-primary": variant === "primary",
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <img src={iconLeft} alt={iconLeft} className="pr-3" />}
      <span>{loading ? "loading..." : children}</span>
      {iconRight && <img src={iconRight} alt={iconRight} className="pl-3" />}
    </button>
  );
};

export default Button;

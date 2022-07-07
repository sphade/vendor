import React from "react";
import { ReactComponent as ErrorSvg } from "../assets/images/icons/error.svg";

const Error = ({
  header = "an error occurred while fetching the data",
  subtitle = "check your internet connection and try again",
}: {
  header?: string;
  subtitle?: string;
}) => {
  return (
    <div className="w-full text-center h-full center-element flex-col">
      <ErrorSvg className="h-[100px] mx-auto w-[200px]" />
      <div>
        {header && (
          <h3 className="text-tertiary text-lg  capitalize font-semibold">
            {header}
          </h3>
        )}
        {subtitle && (
          <p className="text-gray-500 text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Error;

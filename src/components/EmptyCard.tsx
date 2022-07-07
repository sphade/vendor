import React from "react";
import { ReactComponent as EmptyWallet } from "../assets/images/icons/empty-wallet.svg";

const EmptyCard = ({
  header = "There are currently no data",
  subtitle = "They will appear here when available",
}: {
  header?: string;
  subtitle?: string;
}) => {
  return (
    <div className="w-full text-center h-full flex-col center-element">
      <EmptyWallet className="h-[150px]  mx-auto w-[400px]" />
      <div>
        {header && (
          <h3 className="capitalize text-tertiary text-lg font-semibold">{header}</h3>
        )}
        {subtitle && (
          <p className="text-gray-500                                   text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmptyCard;

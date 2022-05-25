import { Button } from "..";
import { AddCircleIcon, NoOrderIcon } from "../../assets/images/icons";

const NoOrder = () => {
  return (
    <div className="center-element">
      <div className="w-[400px]  space-y-5 py-10">
        <img src={NoOrderIcon} alt="noOrderIcon" />
        <h2 className="text-4xl text-tertiary text-center font-semibold">
          No Upcoming Order
        </h2>
        <p className=" text-gray-700 text-center">
          You currently have no order history. All upcoming and order history
          will appear here.
        </p>
        <Button variant="primary" full size="medium" iconLeft={AddCircleIcon}>
          Create order
        </Button>
      </div>
    </div>
  );
};

export default NoOrder;

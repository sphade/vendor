import { Link } from "react-router-dom";
import { Button } from ".";
import { AddCircleIcon, NoOrderIcon } from "../assets/images/icons";

const NoOrder = () => {
  return (
    <div className="center-element">
      <div className="w-[400px]  space-y-5 py-10">
        <NoOrderIcon/>
        <h2 className="text-4xl text-tertiary    text-center font-semibold">
          No Upcoming Order
        </h2>
        <p className=" text-gray-700 text-center">
          You currently have no order history. All upcoming and order history
          will appear here.
        </p>
        <Link to="create-order" className="block">
          <Button variant="primary" full size="medium" IconLeft={AddCircleIcon}>
            Create order
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoOrder;

import successIcon from "../../../assets/images/icons/success-icon.svg";
import { Button } from "../../../components";
const AccountCreated = () => {
  return (
    <div className="w-[680px] py-[50px] rounded-lg shadow-lg bg-secondary center-element">
      <div className="w-[50%]">
        <div className="center-element mb-10">
          <img src={successIcon} alt="successIcon" />
        </div>
        <h3 className="text-tertiary text-center uppercase text-lg font-bold mb-3">
        ACCOUNT CREATED SUCCESSFULLY
        </h3>
        <p className="text-center text-base text-gray-600 mb-10">
        A mail will be sent to you to confirm sign up
        </p>
        <Button variant="primary" full>
        get started
        </Button>
      </div>
    </div>
  );
};

export default AccountCreated;

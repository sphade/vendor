import { Link } from "react-router-dom";
import {ReactComponent as  SuccessIcon} from "../../../assets/images/icons/success-icon.svg";
import { Button } from "../../../components";
const ForgotPassword4 = () => {
  return (
    <div className="w-[680px] py-[50px] rounded-lg shadow-lg bg-secondary center-element">
      <div className="w-[50%]">
        <div className="center-element mb-10">
          <SuccessIcon />
        </div>
        <h3 className="text-tertiary text-center uppercase text-lg font-bold mb-3">
          Reset Password successfully
        </h3>
        <p className="text-center text-base text-gray-600 mb-10">
          You can now sign into your Bossbus Premium Account
        </p>
        <Link to='/login'>
          <Button variant="primary" full>
          sign in
        </Button>
        </Link>
      
      </div>
    </div>
  );
};

export default ForgotPassword4;

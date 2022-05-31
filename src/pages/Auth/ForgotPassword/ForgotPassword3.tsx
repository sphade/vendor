import { Button, PasswordInput } from "../../../components";

const ForgotPassword3 = () => {
  return (
    <div className="w-[680px] py-[50px] rounded-lg shadow-md bg-secondary center-element">
      <div className="w-[60%]">
        <h3 className="text-tertiary text-center uppercase text-lg font-bold mb-3">
          Reset Password
        </h3>
        <p className="text-center text-base text-gray-600 mb-10">
          You can now create a new password
        </p>
        <div className="space-y-5 mb-10">
          <PasswordInput />
          <PasswordInput />
        </div>
        <Button variant="tertiary" full>
          reset password
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword3;

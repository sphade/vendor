import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Button, PasswordInput } from "../../components";

const Login = () => {
  const navigate = useNavigate();
  return (
    <form
      className="rounded-lg bg-white center w-[460px]  shadow-xl  p-10"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/overview", { replace: true, });
      }}
    >
      <h1 className="text-tertiary text-center uppercase text-base font-bold mb-10">
        sign in
      </h1>
      <div className="space-y-5">
        <TextField fullWidth label="Email Address" type="email" />
        <PasswordInput placeholder="password" />
      </div>
      <Link to="/forgot-password/step-1">
        <p className="float-right text-xs mt-2 clear-both  text-gray-900 capitalize">
          forgot password?
        </p>
      </Link>

      <div className="mt-[50px] ">
        <Button full={true} variant="primary">
          sign in
        </Button>
      </div>
    </form>
  );
};

export default Login;

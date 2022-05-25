import {  TextField } from "@mui/material";
import { Button, PasswordInput } from "../../components";

const Login = () => {
  return (
    <form
      className="rounded-lg bg-white center w-[460px]  shadow  p-10"
      onSubmit={(e) => {
        e.preventDefault();
        alert("submited");
      }}
    >
      <h1 className="text-tertiary text-center uppercase text-base font-bold mb-10">
        sign in
      </h1>
      <div className="space-y-5">
        <TextField fullWidth label="Email Address" type="email"  />
       <PasswordInput/>
      </div>
      <p className="float-right text-xs mt-2 clear-both  text-gray-900 capitalize">
        forgot password?
      </p>
      <div className="mt-[50px] ">
        <Button   full={true} variant="primary" >sign in</Button>
      </div>
    </form>
  );
};

export default Login;

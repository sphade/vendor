import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button, PasswordInput } from "../../components";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/mutations";
import { emailValidation } from "../../validation/emailValidation";

const Login = () => {
  const login = useLogin();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => login.mutate(data);
  return (
    <form
      className="rounded-lg bg-white center w-[460px]  shadow-xl  p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-tertiary text-center uppercase text-base font-bold mb-10">
        sign in
      </h1>
      <div className="space-y-5">
        <TextField
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailValidation,
              message: "invalid email format",
            },
          })}
          fullWidth
          error={errors?.email}
          helperText={errors?.email && errors?.email?.message}
          label="Email Address"
          type="email"
          autoComplete="email"
        />

        <PasswordInput
          rules={{
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password must be more than 8 characters",
            },
          }}
          control={control}
          name={"password"}
          label="password"
        />
      </div>
      <Link
        to="/forgot-password/step-1"
        className="float-right text-xs mt-2 clear-both  text-gray-900 capitalize hover:text-primary default-transistion"
      >
        forgot password?
      </Link>

      <div className="mt-[50px] ">
        <Button full={true} loading={login.isLoading} variant="primary">
          sign in
        </Button>
      </div>
      <p className="text-xs mt-2">
        Don't have an account,
        <Link to="/register" className="text-primary">
          {" "}
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;

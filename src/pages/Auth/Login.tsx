import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button, PasswordInput } from "../../components";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => alert(JSON.stringify(data));

  // const navigate = useNavigate();
  return (
    <form
      className="rounded-lg bg-white center w-[460px]  shadow-xl  p-10"
      onSubmit={
        handleSubmit(onSubmit)
        // navigate("/overview", { replace: true });
      }
    >
      <h1 className="text-tertiary text-center uppercase text-base font-bold mb-10">
        sign in
      </h1>
      <div className="space-y-5">
        <TextField
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email format",
            },
          })}
          fullWidth
          error={errors.email}
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

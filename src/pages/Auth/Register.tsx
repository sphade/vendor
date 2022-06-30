import TextField from "@mui/material/TextField";
import { PasswordInput, Button } from "../../components";
import { CameraBoxIcon, CameraIcon } from "../../assets/images/icons";
import PhoneInput from "react-phone-input-2";
import { Controller, useForm } from "react-hook-form";
import { emailValidation } from "../../validation/emailValidation";
import { Checkbox } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { useSignup } from "../../hooks/mutations";
import { useDispatch } from "react-redux";
import { setSignUpInfo } from "../../redux/slices/SignUpInfoSlice";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

const Register = () => {
  // const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const signup = useSignup();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data: any) => {
    if (!data.acceptTerms) {
      enqueueSnackbar("please accept the terms and conditions", {
        variant: "info",
      });
      return;
    } else {
      dispatch(setSignUpInfo(data));
      localforage.setItem("signUpInfo", data);
      signup.mutate({ email: data.email, phone: `+${data.phone}` });
    }
  };
  return (
    <div className="w-[664px] px-[100px] rounded-lg shadow-lg  mb-[100px] py-10 border  relative   bg-secondary">
      <div className="mb-10 text-center">
        <h1 className="text-tertiary  uppercase text-lg font-bold mb-10">
          Sign Up
        </h1>

        <div className=" relative h-[100px] ">
          <img
            src={CameraBoxIcon}
            alt="CameraBoxIcon"
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={CameraIcon}
            alt="CameraIcon"
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center justify-center gap-2 text-blue-600 text-xs">
          <span className="font-semibold     uppercase">add business logo</span>
          {/* <input type="file" /> */}
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Business Name"
          type={"text"}
          {...register("businessName", {
            required: "this field is required",
          })}
          helperText={errors.businessName && errors.businessName.message}
          error={errors.businessName}
        />
        <TextField
          fullWidth
          label="Email Address"
          type={"email"}
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailValidation,
              message: "invalid email format",
            },
          })}
          helperText={errors.email && errors.email.message}
          error={errors.email}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "this field is required",
          }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"ng"}
              placeholder="phone number"
              enableSearch={true}
              containerClass="!w-full "
              inputClass="!w-full "
              inputProps={{
                name: "number",
                required: true,
              }}
              isValid={() => {
                if (errors.phone) {
                  return errors.phone.message;
                } else {
                  return true;
                }
              }}
            />
          )}
        />

        <TextField
          fullWidth
          label="Business Address"
          type={"text"}
          {...register("businessAddress", {
            required: "this field is required",
          })}
          helperText={errors.businessAddress && errors.businessAddress.message}
          error={errors.businessAddress}
        />
        <PasswordInput
          label="password"
          control={control}
          name="password"
          rules={{
            required: "this field is required",
          }}
        />
        <PasswordInput
          label="confirm password"
          control={control}
          name="confirmPassword"
          rules={{
            required: "this field is required",
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "your password does not watch";
              }
            },
          }}
        />

        <div className="flex items-center justify-between w-full gap-3">
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} id="terms" name="terms" />
            )}
          />

          <label className="text-sm " id="terms" htmlFor="terms">
            By creating a Bossbus Premium Account, I understand and agree to
            Bossbus’s Privacy Notice and Terms of Use
          </label>
        </div>
        <div className="pt-5">
          <Button full variant="primary" loading={signup.isLoading}>
            sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;

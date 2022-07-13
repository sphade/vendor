import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { ChangePictureIcon } from "../assets/images/icons";
import avatarIcon from "../assets/images/icons/avatar.png";
import {
  Button,
  EmailModal,
  EmailVerificationModal,
  BackButton,
  PasswordInput,
  Loading,
} from "../components";
import { useChangeProfilePicture } from "../hooks/mutations";
import { useUser } from "../hooks/queries";
import ImageUploading from "react-images-uploading";
import { useForm } from "react-hook-form";

const Profile = () => {
  const user = useUser();
  const [password, setPassword] = useState(user.data?.password);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: password,
    },
  });
  useEffect(() => {
    setPassword(user.data?.password);
  }, [user.data?.password]);
  const changeImage = useChangeProfilePicture();
  const [images, setImages] = useState<any[]>([]);
  const formData = new FormData();
  const onImageChange = async (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };
  const [edit, setEdit] = React.useState(false);
  const [emailModalState, setEmailModalState] = React.useState(false);
  const [emailVerificationModalState, setEmailVerificationModalState] =
    React.useState(false);
  useEffect(() => {
    changeImage.isSuccess && setEdit(false);
  }, [changeImage.isSuccess]);

  if (user?.isLoading) {
    return (
      <div className="w-full h-screen">
        <Loading />
      </div>
    );
  }

  if (user?.isError) {
    return (
      <div className="w-full h-screen center-element">
        <h1>{user.error.message} </h1>
        <button
          className="p-1 border-primary hover:border-black border ml-2 rounded hover:text-primary hover:bg-black default-transition"
          onClick={() => {
            user.refetch();
          }}
        >
          try again
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-5 mx-auto items-start  w-fit py-20 relative  ">
      <BackButton />
      <div className="border">
        <EmailModal
          modalState={emailModalState}
          setModalState={setEmailModalState}
        />
        <EmailVerificationModal
          modalState={emailVerificationModalState}
          setModalState={setEmailVerificationModalState}
        />
        <div className="w-[684px]  text-center shadow-lg border bg-secondary rounded-lg ">
          <h1 className="text-2xl text-tertiary font-semibold capitalize my-10">
            edit profile
          </h1>
          <ImageUploading
            value={images}
            onChange={onImageChange}
            maxNumber={1}
            dataURLKey="image"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <>
                <div className="relative  ">
                  <Avatar
                    src={(imageList && imageList[0]?.image) || user?.data.logo}
                    alt="avatarIcon"
                    className="!h-32 !w-32 mb-10 mx-auto"
                    sx={{
                      h: "128px",
                    }}
                  />
                  {imageList.map((image, index) => (
                    <div className="w-full   justify-center gap-5 mx-auto flex items-center -mt-7 mb-3">
                      <button
                        onClick={() => {
                          onImageUpdate(index);
                        }}
                        className="px-1 border rounded text-primary border-primary"
                      >
                        update
                      </button>
                      <button
                        onClick={() => {
                          formData.append("image", images[0]?.file);
                          changeImage.mutate(formData);
                        }}
                        className="px-1 text-white border default-transition rounded bg-primary border-primary"
                      >
                        {changeImage.isLoading ? "uploading..." : "upload"}
                      </button>
                    </div>
                  ))}
                  {(edit || !images) && (
                    <img
                      src={ChangePictureIcon}
                      alt="uploadIcon"
                      className="absolute bottom-[25px] cursor-pointer right-[280px]"
                      onClick={() => {
                        onImageUpload();
                      }}
                    />
                  )}
                </div>

                <form
                  className="space-y-5 w-[390px] mx-auto mb-10"
                  onSubmit={(e: any) => {
                    e.preventDefault();
                  }}
                >
                  <TextField
                    fullWidth
                    aria-readonly
                    label="Business Name"
                    type={"text"}
                    defaultValue={user?.data.business_name}
                    InputProps={{
                      readOnly: !edit,
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    value={user?.data.email}
                    type={"email"}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <PhoneInput
                    country={"ng"}
                    placeholder="phone Number"
                    enableSearch={true}
                    containerClass="!w-full"
                    inputClass="!w-full !cursor-text"
                    value={user?.data.phone}
                    disabled
                  />
                  <TextField
                    fullWidth
                    value={user?.data?.business_address}
                    InputProps={{
                      readOnly: !edit,
                    }}
                    label="Business Address"
                  />{" "}
                  <TextField
                    fullWidth
                    value={user?.data?.address}
                    InputProps={{
                      readOnly: !edit,
                    }}
                    label="Business Address"
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
                  {!edit ? (
                    <Button full onClick={() => setEdit(true)}>
                      edit profile
                    </Button>
                  ) : (
                    <Button full loading={changeImage.isLoading}>
                      save
                    </Button>
                  )}
                </form>
              </>
            )}
          </ImageUploading>
          {edit ? (
            <>
              <p
                onClick={() => setEmailModalState(true)}
                className="absolute top-[450px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze "
              >
                change
              </p>
              <p className="absolute top-[530px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze ">
                change
              </p>
              <p className="absolute top-[690px] cursor-pointer right-[80px] text-base text-primary font-semibold capitalze ">
                change
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;

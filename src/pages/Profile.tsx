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

const Profile = () => {
  const changeImage = useChangeProfilePicture();
  const [images, setImages] = useState<any[]>([]);
  const onImageChange = async (imageList: any, addUpdateIndex: any) => {
    const formData = new FormData();

    setImages(imageList);
    formData.append("image", imageList[0]);
    
    changeImage.mutate(formData);

  };
  const [edit, setEdit] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  const [emailModalState, setEmailModalState] = React.useState(false);
  const [emailVerificationModalState, setEmailVerificationModalState] =
    React.useState(false);
  // const [user, setUser] = React.useState<any>();
  const user = useUser();
  // useEffect(() => {
  //   localforage.getItem("user", (err, val) => {
  //     setUser(val);
  //     setLoading(false);
  //   });
  // }, []);
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
          {/* <img src={avatarIcon} alt={avatarIcon} className="h-32 mb-10 mx-auto" /> */}
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
              <div className="relative border ">
                <Avatar
                  src={(imageList && imageList[0]?.image) || user?.data.photo}
                  alt="avatarIcon"
                  className="!h-32 !w-32 mb-10 mx-auto"
                  sx={{
                    h: "128px",
                  }}
                  onClick={() => {
                    onImageUpload();
                  }}
                />
                {imageList.map((image, index) => (
                  <div className="w-[80px] mx-auto -mt-5">
                    <Button
                      full
                      onClick={() => {
                        onImageUpdate(index);
                      }}
                      size="small"
                      variant="outlinePrimary"
                    >
                      update
                    </Button>
                  </div>
                ))}
                <img
                  src={ChangePictureIcon}
                  alt="uploadIcon"
                  className="absolute bottom-[35px] right-[280px]"
                />
              </div>
            )}
          </ImageUploading>

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
              defaultValue={user?.data.name}
              InputProps={{
                readOnly: !edit,
              }}
            />
            <TextField
              fullWidth
              label="Email ?Address"
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
              value={user?.data?.address}
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
            {/* <PasswordInput placeholder="password" /> */}
            {!edit ? (
              <Button full onClick={() => setEdit(true)}>
                edit profile
              </Button>
            ) : (
              <Button
                full
                onClick={() => {
                  setEdit(false);
                }}
              >
                save
              </Button>
            )}
          </form>
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

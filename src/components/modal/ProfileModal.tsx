import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC } from "react";

import Button from "../Button";
import { IModal } from "./interface";

export const EmailModal: FC<IModal> = ({ modalState, setModalState }) => {
  function closeModal() {
    setModalState(false);
  }

  return (
    <Modal open={modalState} onClose={closeModal}>
      <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] h-[310px]">
        <h1 className="capitalize text-tertiary font-semibold">
          enter your email address
        </h1>
        <TextField label="Email" fullWidth margin="normal" type="email" />
        <Button full>continue</Button>
      </div>
    </Modal>
  );
};

export const EmailVerificationModal: FC<IModal> = ({
  modalState,
  setModalState,
}) => {
  function closeModal() {
    setModalState(false);
  }

  return (
    <Modal open={modalState} onClose={closeModal}>
      <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px] h-[310px]">
        <p className="text-gray-600 py-6">
          Resend code in{" "}
          <span className="text-tertiary font-semibold">00:25</span>
        </p>
        <Button full={true}>resend code</Button>
        <p className="text-base text-gray-600 pt-2">Didn't get code? </p>
      </div>
    </Modal>
  );
};

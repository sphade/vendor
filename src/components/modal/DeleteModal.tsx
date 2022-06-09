import { Modal } from "@mui/material";
import { FC } from "react";

import { IModal } from "./interface";
const DeleteModal: FC<IModal> = ({ modalState, setModalState }) => {
  function closeModal() {
    setModalState(false);
  }

  return (
    <Modal open={modalState} onClose={closeModal}>
      <div className="absolute top-[20%] space-y-10  px-[144px] text-center py-10 left-[50%] -translate-x-1/2 bg-white rounded-lg   w-[450px] border-t-4 border-red-700 h-[310px]">
        <h1>lawallawallawallawallawallawal</h1>
      </div>
    </Modal>
  );
};
export default DeleteModal;

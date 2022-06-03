import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "../Button";

export default function ModalC({ modalIsOpen, setModalIsOpen }) {
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Modal open={modalIsOpen} onClose={closeModal}>
      <div className="absolute top-[30%] px-5 py-2 left-[50%] -translate-x-1/2 bg-white rounded-lg shadow-xl  w-[680px]">
        <h1>enter yur email address</h1>
        <TextField label="email" fullWidth margin="normal" type="email" />
        <Button full>continue</Button>
      </div>
    </Modal>
  );
}

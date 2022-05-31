import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import TextField from "@mui/material/TextField";
// import React from "react";
// import Modal from "react-modal";
import Button from "../Button";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",

//     zIndex: 9999999,
//   },
// };

export default function ModalC({ modalIsOpen, setModalIsOpen }) {
  // function openModal() {
  //   setModalIsOpen(true);
  // }
  // function afterOpenModal() {
  //   references are now sync'd and can be accessed.
  // }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    // <Modal
    //   isOpen={modalIsOpen}
    //   onAfterOpen={afterOpenModal}
    //   onRequestClose={closeModal}
    //   style={customStyles}
    // >
    //   <div className="w-[400px] h-full rounded-lg ">
    //     <h1>enter your email</h1>
    //     <TextField />
    //     <Button full>continue</Button>
    //   </div>
    // </Modal>
    <Dialog open={modalIsOpen} onClose={closeModal}>
      <div className="text-secondary w-[680px] !px-[143px]  "></div>
      <DialogTitle>
        <h1 className="text-tertiary text-center capitalize text-lg mb-10">
          enter your email address
        </h1>
      </DialogTitle>
      <DialogContent>
        <TextField label="email" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button full>continue</Button>
      </DialogActions>
    </Dialog>
  );
}

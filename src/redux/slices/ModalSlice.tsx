import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
  deleteModal: boolean;
  deleteArchiveModal: boolean;
  emailVerificationModal: boolean;
  numberVerificationModal: boolean;
}
const initialState: IModalSlice = {
  deleteModal: false,
  deleteArchiveModal: false,
  emailVerificationModal: false,
  numberVerificationModal: false,
};

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    toggleDeleteModal: (state) => {
      state.deleteModal = !state.deleteModal;
    },
    toggleDeleteArchiveModal: (state) => {
      state.deleteArchiveModal = !state.deleteArchiveModal;
    },
    toggleEmailVerificationModal: (state) => {
      state.emailVerificationModal = !state.emailVerificationModal;
    },
    toggleNumberVerificationModal: (state) => {
      state.numberVerificationModal = !state.numberVerificationModal;
    },
    setEmailVerificationModal: (state) => {
      state.emailVerificationModal = true;
    },
    setNumberVerificationModal: (state) => {
      state.numberVerificationModal = true;
    },
  },
});

export const {
  toggleDeleteModal,
  toggleDeleteArchiveModal,
  toggleEmailVerificationModal,
  setEmailVerificationModal,
  toggleNumberVerificationModal,
  setNumberVerificationModal
} = ModalSlice.actions;

export default ModalSlice.reducer;
// export const modalSelector = (state) => state.overview;

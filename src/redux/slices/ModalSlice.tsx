import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
  deleteModal: boolean;
  deleteArchiveModal: boolean;
  emailVerificationModal: boolean;
}
const initialState: IModalSlice = {
  deleteModal: false,
  deleteArchiveModal: false,
  emailVerificationModal: false,
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
    setEmailVerificationModal: (state) => {
      state.emailVerificationModal = true;
    },
  },
});

export const {
  toggleDeleteModal,
  toggleDeleteArchiveModal,
  toggleEmailVerificationModal,
  setEmailVerificationModal
} = ModalSlice.actions;

export default ModalSlice.reducer;
// export const modalSelector = (state) => state.overview;
